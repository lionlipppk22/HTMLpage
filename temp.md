
### 1. TPM Provisioning 是做什麼的？
Intel TXT 仰賴 TPM（可信賴平台模組）來安全地儲存測量值（Measurements）和組態資訊。**TPM Provisioning 的核心作用在於初始化 TPM，使其能夠與 CPU 和晶片組進行通訊**。

具體功能包括：
*   **建立信任根：** 配置 TPM 的非揮發性儲存空間（TPM-NV）、平台組態暫存器（PCR）和存取權限（Localities）。
*   **定義策略索引：** 在 TPM 中定義特定的索引（Index），例如 **AUX Index**（供 ACM 模組使用的架構索引）和 **PS Index**（平台供應商索引，用於定義平台的預設啟動策略）。
*   **確保安全性：** 只有在 TPM 啟動並正確配置了索引和「平台預設策略（Platform Default Policy）」後，TXT 環境才能正式建立。

### 2. 要如何做？（執行流程）
根據來源，啟用 TXT 與配置 TPM 的建議流程如下：

*   **前置準備：**
    *   硬體必須具備 **離散式 TPM（dTPM）2.0**（或 1.2）。
    *   準備對應平台的 **ACM 套件**，其中包含專用的配置工具（不同世代的平台工具不可混用）。
    *   **注意：** 必須先執行 TPM 配置，**然後**才在 BIOS 中開啟 Intel TXT。

*   **執行步驟：**
    1.  **在 BIOS 中停用 Intel TXT**（配置期間建議保持停用）。
    2.  **在 BIOS 中啟用並激活 TPM**。
    3.  **進入命令列環境：** TPM 1.2 使用 DOS 環境；TPM 2.0 則使用 EFI Shell。
    4.  **執行配置腳本（以 TPM 2.0 為例）：**
        *   執行 `ResetPlatformAuth.nsh`：重置平台驗證資訊。
        *   執行 `Define_AUX.nsh`：定義輔助索引。
        *   執行 `Define_PS.nsh`：定義平台供應商索引與策略。
        *   （選配）若包含 SGX 功能，執行 `Define_SGX.nsh`。
    5.  **鎖定 TPM：** 對於生產系統（Production Systems），需執行鎖定指令（如 `Lock_PS2.nsh`）以防止配置被篡改。
    6.  **重啟並在 BIOS 中正式啟用 Intel TXT**。


<div style="page-break-after: always;"></div>

### 3. 有哪些 Config（配置）？
要成功完成 TXT_001，需要調整 BIOS 設定以及 TPM 內部的索引配置：

*   **BIOS 關鍵設定：**
    *   **Enable Intel(R) TXT：** 設為 `<Enable>`。
    *   **VMX（虛擬化技術）：** 設為 `<Enable>`。
    *   **SMX（安全模式擴充）：** 設為 `<Enable>`。
    *   **VT-d（導向式 I/O 虛擬化）：** 必須啟用，TXT 才能運作。
    *   **MSR Lock Control：** 設為 `<Enable>`。

*   **TPM 內部配置參數：**
    *   **AUX Index：** 供 SINIT AC 模組使用的儲存區域。
    *   **PS Index Attributes：** 可選擇 **PS1** 或 **PS2** 屬性。PS2 屬性的數據可以被「寫入鎖定（Write-locked）」，提供更高的安全性。
    *   **Hash Algorithm：** 現代系統通常使用 **SHA256** 或更高階的演算法（如 SHA384）進行索引定義。

**驗證標準：**
完成上述配置後，可執行 `TxtBtgInfo.efi` 工具。若結果顯示 **"SUCCESS: Intel TXT policy is all set!"** 且相關暫存器狀態正確（如 S-ACM Success 為 0x1），即代表 TXT_001 驗證成功。

以下是與 TXT_001 相關的指令清單：

### 1. 核心驗證指令
這是用於確認 Intel TXT 是否已正確啟用並產生測試報告的主要指令：
*   **`TxtBtgInfo.efi –c a > TXT_001_2025MMDD.txt`**：在 EFI Shell 下執行，將詳細的硬體狀態（如 BOOTSTATUS 暫存器）轉儲到文字檔中進行檢查。


<div style="page-break-after: always;"></div>

### 2. TPM 配置指令（TXT_001 的必要前置步驟）
在進行 TXT_001 驗證前，必須先完成 TPM 的配置（Provisioning）。針對 TPM 2.0 系統，常用的指令如下：
*   **`ResetPlatformAuth SHA256 EXAMPLE`**：使用平台策略將平台認證（platformAuth）重置為空，這是執行其他腳本前的首要步驟。
*   **`SetPlatformPolicy.nsh SHA256 EXAMPLE`**：設定特定的平台策略。
*   **`Tpm2_CBnT_Prov.nsh SHA256 EXAMPLE`**：自動執行 AUX 和 PS 索引的定義（適用於伺服器平台）。
*   **`Define_AUX.nsh`**：手動定義輔助索引（AUX Index），這是 ACM 模組必須使用的架構索引。
*   **`Define_PS.nsh`**：手動定義平台供應商索引（PS Index）及其啟動原則。
*   **`Define_SGX.nsh`**：若平台同時使用 SGX 技術，則需執行此指令定義 SGX 索引。
*   **`Lock_PS2.nsh`**：針對生產系統（Production systems），用於對 PS2 屬性的數據進行寫入保護鎖定。

### 3. TPM 1.2 的舊版指令（DOS 環境）
若使用較舊的 TPM 1.2 系統，則指令格式為 `.bat` 檔：
*   **`AUX2_DEF.bat`**：定義 AUX 索引。
*   **`PS_DEF.bat`**：定義 PS 索引。
*   **`PS_ANY.bat`**：定義預設策略。
*   **`NV_lock.bat`**：執行鎖定。

### 4. 驗證通過的判斷標準
執行 `TxtBtgInfo.efi` 後，報告中若出現以下結果即代表 TXT_001 測試成功：
1.  **SUCCESS: Intel TXT policy is all set!**
2.  **S-ACM Success : 0x1**（表示安全 ACM 模組啟動成功）。
3.  **TXT Startup Success : 0x1**。

**提醒：** 來源強調 TXT_001 的前提是必須先在 BIOS 中完成相關配置（如啟用 Intel TXT、VMX、SMX 及 VT-d），且 TPM 必須處於已配置狀態。