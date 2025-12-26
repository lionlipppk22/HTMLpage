關於 **870265 Intel® AMX（進階矩陣擴充）** 技術在 Granite Rapids 工作站（GNR-W）上的測試，以下是詳細的測試方式：
===

1. 硬體與軟體環境要求 (Platform Requirements)
在開始測試前，系統必須符合以下條件：
*   **硬體**：使用 Intel® Xeon® 600 系列處理器（GNR-W），且每個通道需插滿 DIMM (1 DPC)，記憶體總容量至少 **128 GB**。
*   **作業系統**：安裝 **Ubuntu 22.04** 或更新版本。
*   **必要軟體**：需安裝 **OpenVINO Toolkit** 以及 **Intel® oneAPI Deep Neural Network Library (oneDNN)**。

2. 測試項目一：AMX 功能驗證 (Validation)
此測試旨在確認 AMX 的 **FP16、INT8 與 BF16** 矩陣運算功能是否正確啟用。
*   **獲取工具**：客戶需提交 IPS，由 Intel 提供 **`AMX_validation.sh`** 腳本。
*   **執行測試**：以 **superuser (sudo) 權限**執行該腳本。該腳本會調用 oneDNN 的 `benchdnn` 工具進行測試。
*   **結果驗證**：檢查生成的 **`amx_sanity_summary.txt`** 檔案，確認其中的效能指標與 **Pass/Fail（通過/失敗）** 狀態。

3. 測試項目二：效能基準評比 (Performance Benchmark)
此測試透過比較「啟用 AMX」與「禁用 AMX」時的差異，來展示其在 AI 推論上的效能優勢。
*   **獲取工具**：由 Intel 提供 **`Openvino_AMX_demo.sh`** 腳本。
*   **執行測試**：執行該腳本，它會利用 OpenVINO 的 `benchmark_app` 工具進行 FP16 推論測試。
*   **結果驗證**：查看生成的摘要與日誌（分為 **`amx_enabled`** 與 **`amx_disabled`**），對比兩者的吞吐量 (Throughput) 與延遲 (Latency)。

4. 測試流程總結
*   **提交請求**：客戶透過 IPS 系統向 Intel 申請測試腳本。
*   **執行腳本**：在符合要求的 Ubuntu 環境下執行自動化腳本。
*   **上傳回饋**：測試完成後，客戶需將產出的 **log/txt 檔案**上傳回 IPS 系統，並在評論區更新測試反饋。

5. 針對 Intel® AMX 測試 (最新來源)

若您是針對 Granite Rapids 工作站 (GNR-W) 的 AMX 功能進行測試，BIOS 需注意以下設定：
*   **套用最新 BKC**：系統必須使用最新發佈版本的 **BKC (Best Known Configuration)** 設定。
*   **啟用 AMX/TMUL 功能**：在 BIOS 中必須確認 **Intel® Deep Learning Boost (AMX/TMUL)** 項目已設定為 **Enable**，才能進行功能驗證。
*   **效能對比切換**：在進行效能基準測試（Test 2）時，需要分別在 BIOS 中設定 **AMX Enabled** 與 **AMX Disabled** 兩種狀態，以對比推論效能的差異。

### **BIOS 需要改嗎？**
| 測試類別 | 關鍵 BIOS default 設定項目 |
| :--- | :--- |
| **AMX 測試** | 1. 套用最新 **BKC** <br> 2. 啟用 **Intel® Deep Learning Boost (AMX/TMUL)** |

---
<div style="page-break-after: always;"></div>

關於 **870266 Intel® RDT (Resource Director Technology)** 的測試方法以及 BIOS 相關要求說明如下：
===

### **Intel® RDT 如何測試？**
RDT 的測試主要透過 Intel 提供的自動化腳本進行，旨在驗證 **CMT**（快取監控）、**MBM**（記憶體頻寬監控）、**CAT**（L3 快取配置）、**CDP**（L3 代碼數據優先級）及 **MBA**（記憶體頻寬分配）等功能。

**詳細測試步驟：**
1.  **取得腳本**：客戶需先提交 IPS 申請，由 Intel 提供 **`prw_rdt_val_test.sh`** 測試腳本。
2.  **環境準備**：
    *   將腳本複製到系統的 `/root` 目錄下。
    *   **設定網路**：若在公司或實驗室環境，需在腳本的第 7-9 行更新 **Proxy（代理伺服器）** 設定，以便腳本下載所需的開源套件。
    *   **系統要求**：需使用 **Ubuntu 24.04** 或更新版本的作業系統。
3.  **執行測試**：使用 **superuser (sudo)** 權限執行以下命令：
    *   `bash ./prw_rdt_val_test.sh`。
4.  **測試時程與產出**：測試大約耗時 **30 分鐘**。測試完成後會生成一份 **`prw_rdt_val_test_rpt.log`** 報告，需將此檔案上傳至 IPS 系統作為測試結果。

### **BIOS 需要改嗎？ (不用)**
來源中對於 BIOS 的要求主要集中在「韌體版本」的標準化：

*   **套用最新 BKC**：測試前必須確保系統已刷入 **最新的 PV 已發布 BKC (Best Known Configuration)**，來源特別指明需為 **WW45 或以上版本**。
*   **硬體配置檢查**：
    *   需使用 Intel® Xeon® 600 系列處理器與 800 系列晶片組 (W890)。
    *   **記憶體插法**：可使用 1 DPC 或 2 DPC，但**絕對不可使用不平衡的插法 (in-balanced population)**，否則會影響測試準確性。

---
<div style="page-break-after: always;"></div>

關於 **870267 Intel® VROC（CPU 虛擬 RAID）測試計畫**，針對 Granite Rapids 工作站（GNR-WS）平台的測試方法如下：
===

### **VROC 如何測試？**
VROC 的測試主要分為三個階段，旨在驗證從預啟動環境到作業系統內的完整功能：

1.  **階段一：RAID 磁碟卷冊建立與列舉 (Test Case 1)**
    *   **硬體準備**：需安裝 **VROC 硬體金鑰 (Hardware Key)**，並將兩顆支援的 NVMe SSD 安裝在同一個 VMD 控制器下的 PCIe 插槽中。
    *   **建立方式**：進入 BIOS 的 **EDKII Menu**，在「Intel® Virtual RAID on CPU」選項下建立 **RAID1 (Mirror)** 卷冊。
    *   **驗證方式**：除了在 BIOS 中確認卷冊狀態外，還需進入 **UEFI Internal Shell**，執行 `RCfgVROC.efi /I /P` 命令，確認系統能正確辨識 RAID 卷冊及物理硬碟資訊。

2.  **階段二：Windows 11 作業系統安裝 (Test Case 2)**
    *   **驅動載入**：在 Windows 安裝過程中，必須先透過 USB 載入 **Intel VROC F6-drivers**，否則安裝程式將無法辨識 RAID 卷冊。
    *   **驗證方式**：確認 Windows 11 能成功安裝於該 RAID 卷冊，並能穩定開機進入桌面且無藍屏或崩潰現象。

3.  **階段三：VROC GUI 安裝與驗證 (Test Case 3)**
    *   **執行軟體**：在 Windows 系統內以管理員權限執行 `SetupVROC.exe`。
    *   **驗證方式**：開啟 **Intel® VROC GUI** 管理介面，確認其能正確顯示並管理 RAID 卷冊與所有 NVMe SSD。

### **BIOS 需要改嗎？**
**是的，必須進行多項 BIOS 設定**才能正確啟用 VROC 功能。請確保 BIOS 已更新至最新的 BKC 版本（WW43'2025 或更新版本）。具體設定路徑與項目如下：

*   **啟用熱插拔 (Hot Plug)**：
    *   路徑：`EDKII Menu` -> `Socket Configuration` -> `IIO Configuration` -> `Global Configuration`
    *   設定：**Hot Plug <Enable>**
*   **啟用 VMD 技術**：
    *   路徑：`EDKII Menu` -> `Socket Configuration` -> `IIO Configuration` -> `Socket0 Configuration` -> 選擇對應的 `PCI Express` 插槽（如 PE2）
    *   設定：**Intel VMD technology <Enable>**
*   **設定 PCIe 分拆 (Bifurcation)**：
    *   在相同的 PCIe 插槽選單下，根據硬碟配置設定 Bifurcation（例如：**<x4x4x4x4>**）。
*   **啟用具體連接埠的 VMD**：
    *   在分拆後的各個 Port（如 Port E, Port G）選單內，再次將 **Intel VMD technology** 設定為 **<Enable>**。

完成上述設定並重啟系統後，BIOS 才會出現「**Intel(R) Virtual RAID on CPU**」的管理選單，讓您進行後續的 RAID 建立操作。

---
<div style="page-break-after: always;"></div>

針對 **870268 Intel® TXT（可信賴執行技術）** 的測試分為三個主要階段，且**必須修改 BIOS 設定**以及完成特定的前置準備。
===

以下是詳細的測試方式與 BIOS 要求：

### **一、 BIOS 必須修改嗎？**
**是的，必須修改多項 BIOS 設定**，且在測試 TXT 之前，系統必須先啟用 **Intel® Boot Guard**。

**必要的 BIOS 設定項目：**
*   **Processor Configuration**:
    *   **Enable Intel(R) TXT**: 設定為 `<Enable>`。
    *   **MSR Lock Control**: 設定為 `<Enable>`。
    *   **Lock Chipset**: 設定為 `<Enable>`。
    *   **VMX (Virtual Machine Extensions)**: 設定為 `<Enable>`。
    *   **Enable SMX (Safer Mode Extensions)**: 設定為 `<Enable>`。
*   **IIO Configuration / Intel VT for Directed I/O (VT-d)**:
    *   **Intel VT for Directed I/O**: 設定為 `<Enable>`。
    *   **SATC Support**: 設定為 `<Enable>`。

### **二、 TXT 如何測試？**
測試流程分為三個階段，從韌體驗證到作業系統環境：

#### **階段 1：韌體啟用驗證 (TXT_001)**
此步驟是為了確認 BIOS 已正確導引 TXT 功能。
1.  **前置作業**：確保已安裝 **dTPM 2.0** 模組，並完成 **TPM Provisioning**（使用 RDC#633967 工具執行 `Tpm2_CBnT_Prov.nsh` 等指令）。
2.  **執行工具**：在 EFI Shell 下執行 `TxtBtgInfo.efi –c a > TXT_001.txt`。
3.  **判定標準**：檢查日誌中是否出現 `SUCCESS: Intel TXT policy is all set!` 以及 `TXT Startup Success : 0x1`。

#### **階段 2：EFI 工具組測試 (TXT_002)**
驗證系統能否進入「受測量啟動環境」(Measured Launch Environment, MLE)。
1.  **執行工具**：在 EFI Shell 下執行 `getsec64server.efi`。
2.  **執行指令**：
    *   進入環境：`getsec64server.efi –L SENTER –i –d -qi`。
    *   退出環境：`getsec64server.efi –L SEXIT –i`。
3.  **判定標準**：日誌需顯示 `GETSEC[SENTER] complete. System is now in TXT Environment`。

#### **階段 3：可信 Linux 環境驗證 (TXT_003 - 選配)**
驗證在 Linux 環境下配合 **Tboot (Trusted Boot)** 的運作情況。
1.  **執行方式**：使用 **Tboot Live Image** (RDC#637443) 製作開機隨身碟。
2.  **操作**：開機進入 Tboot 系統後，以 root 登入並執行 `txt-stat` 指令。
3.  **判定標準**：確認輸出結果中 `TXT measured launch: TRUE` 與 `secrets flag set: TRUE` 均為真。

### **三、 測試所需工具 (Tools/Collaterals)**
測試時需要準備以下 Intel 提供的工具包：
*   **Server Security Toolkit (RDC#630398)**：包含 `TxtBtgInfo.efi` 與 `getsec64server.efi`。
*   **TPM 2.0 Provisioning Tool (RDC#633967)**：用於 TPM 初始化。
*   **Tboot Live Image (RDC#637443)**：用於 Linux 環境驗證。

---
<div style="page-break-after: always;"></div>

針對 **870269 Granite Rapids 工作站 (GNR-W)** 平台的 **RAS (可靠性、可用性與可服務性) 測試**，其測試方法與 BIOS 設定要求如下：
===

針對 **Granite Rapids 工作站 (GNR-W)** 平台的 **RAS (可靠性、可用性與可服務性) 測試**，以下為您再次整理的測試方法與 BIOS 設定要求：

### **一、 RAS 如何測試？ (測試程序與工具)**
RAS 測試的核心邏輯是**「手動注入錯誤並驗證系統的偵測與修復能力」**。

1.  **硬體與軟體環境準備**：
    *   **硬體**：需準備 **ITP-XDP 3BR 調試硬體**，並將其連接至受測系統 (SUT)。
    *   **軟體**：必須在主機 (Host machine) 安裝最新版的 **CScripts (v0.7)** 以及 **Intel® System Debugger (ISD-NDA U2546 或更高版本)**。
2.  **標準化測試步驟**：
    *   **電源重啟**：進行 AC 電源循環 (AC cycle)。
    *   **調整 BIOS**：根據不同的測試案例（如記憶體、CPU、IIO RAS）修改特定的暫存器或功能開關並儲存。
    *   **啟動系統**：引導系統至 **UEFI Shell 或作業系統 (OS)**。
    *   **執行 CScripts**：開啟 CScripts 視窗並輸入注入命令（例如：`ei.mem.injectMemError` 注入記憶體錯誤，或 `ei.sys.injectIERR()` 觸發系統內部錯誤）。
3.  **驗證結果**：
    *   檢查系統是否產生日誌 (Log) 或進入預期的修復流程（如 ADDDC Sparing 或 PPR）。
    *   **通過標準**：必須提供 **CScripts 日誌** 以及 **BIOS 序列埠日誌 (Serial log)**，證明硬體與韌體功能均正常運作。

### **二、 BIOS 需要改嗎？ (關鍵設定項目)**
**是的，必須修改 BIOS 設定**，否則測試工具無法取得存取權限，系統也無法報告錯誤。

根據來源與我們先前的對話紀錄，我為您整理了 **Granite Rapids 工作站 (GNR-W)** 平台各項關鍵技術的 **BIOS 設定與測試方法摘要表**：

### **表一：RAS（可靠性、可用性與可服務性）測試規格表**
這類測試的核心在於**關閉安全鎖定**並**啟用錯誤注入與報告機制**。

| 技術項目 | 關鍵 BIOS 設定 (Required Knobs) | 
| :--- | :---: |
| **基礎環境 (General)** | **Lock Chipset**: Disable<br> **MSR Lock Control**: Disable<br>**EV DFX Features**: Enable<br>**Disable BIOS Done**: [X] |
| **巡檢修復 (Patrol Scrub)** | **Patrol Scrub**: Enable at End of Post<br>**Interval**: 1<br>**DDR5 ECS**: Enable |
| **需求修復 (Demand Scrub)** | **DDR5 ECS**: Enable |
| **記憶體備用 (ADDDC VLS)** | **Spare Interrupt**: SMI<br>**ADDDC Sparing**: Enable<br>**CE Threshold**: 2 |
| **執行階段修理 (PPR)** | **Runtime PPR/Row Sparing**: Enable<br>**SW Per Row Threshold**: 2 |
| **系統當機傾印 (CrashDump)** | (套用 RAS 基礎環境設定) |
| **中斷閾值 (IMC Bank)** | **EMCA CMCI-SMI Threshold**: 3 |

---

### **表二：AI 加速與資源調度測試表**
AMX 測試著重於**效能對比**與**功能驗證**。

| 技術項目 | 關鍵 BIOS 設定 | 測試工具 / 腳本 | 測試環境要求 |
| :--- | :--- | :--- | :--- |
| **Intel® AMX** (AI 加速) | **Latest BKC** (WW45+)<br>**AMX/TMUL**: Enable/Disable (對比用) | `AMX_validation.sh`<br>`Openvino_AMX_demo.sh` | **Ubuntu 22.04+**<br>需安裝 OpenVINO & oneDNN |
| **Intel® RDT** (資源調度) | **Latest BKC** (WW45+)<br>**記憶體平衡插法** | `prw_rdt_val_test.sh` | **Ubuntu 24.04**<br>需設定網路 Proxy 以更新套件 (根據歷史紀錄) |

---

### **表三：硬體安全與存儲技術測試表 (根據對話歷史)**
這類技術通常需要**硬體組件 (Key/dTPM)** 的配合。

| 技術項目 | 關鍵 BIOS 設定 | 測試步驟 | 必備元件 |
| :--- | :--- | :--- | :--- |
| **Intel® TXT** (可信執行) | **Intel TXT**: Enable<br>**VMX/SMX**: Enable<br>**VT-d**: Enable<br>**Lock Chipset**: Enable | 1. TPM Provisioning<br>2. 執行 `getsec64server.efi` | **dTPM 2.0 模組**<br>Server Security Toolkit |
| **Intel® VROC** (虛擬 RAID) | **VMD Technology**: Enable<br>**Hot Plug**: Enable<br>**PCIe Bifurcation**: x4x4x4x4 | 1. 在 EDKII 建立 RAID<br>2. 載入 F6 驅動安裝 Win11 | **VROC Hardware Key**<br>2 顆以上的 NVMe SSD |

### **重要測試提示：**
1.  **硬體需求**：進行 RAS 測試必須準備 **ITP-XDP 3BR** 調試硬體。
2.  **韌體版本**：所有測試均要求套用最新的 **PV 發布版本 BKC (WW45 或以上)**。
3.  **衝突警告**：**RAS 測試**要求 `Lock Chipset` 為 **Disable**，但 **TXT 測試**要求該項必須為 **Enable**，兩者測試環境不可混用。

---
<div style="page-break-after: always;"></div>

根據您提供的多份測試計畫來源，要完成 **Granite Rapids 工作站 (GNR-W)** 平台的所有測試（包含 AMX, RDT, VROC, TXT/Boot Guard, RAS），您需要準備的軟硬體需求清單如下：
===

### **一、 作業系統 (OS) 需求**
由於不同技術要求的環境不同，建議準備**多重開機**或**多顆系統碟**：
*   **Linux Ubuntu 24.04 或更新版本**：主要用於 **RDT** 測試。
*   **Linux Ubuntu 22.04 或更新版本**：用於 **AMX** 測試，需安裝 OpenVINO 與 oneDNN。
*   **Microsoft Windows 11 (建議 24H2 64-bit)**：用於 **VROC** 與 **TXT/Boot Guard** 的作業系統層級驗證。
*   **UEFI Internal Shell**：用於執行多項韌體工具（如 TxtBtgInfo, RCfgVROC）。
*   **Tboot Live Image**：專用於 **TXT** 階段三的 Linux 驗證環境。

---

### **二、 設備與硬體需求**
除了受測系統 (SUT) 本體，還需要以下特定設備：
*   **處理器與晶片組**：Intel® Xeon® 600 系列 (GNR-W) **QS 版本** CPU 與 Intel® 800 系列晶片組 (W890) **QS 版本** PCH。
*   **偵錯設備 (重要)**：
    *   **ITP-XDP 3BR 偵錯硬體**：執行 **RAS** 測試的必要設備。
    *   **MIPI60-to-ITP60 轉接板**：若主機板設計為 MIPI60 接口則需要此配件。
*   **安全與授權組件**：
    *   **VROC Hardware Key**：用於開啟 VROC RAID 功能。
    *   **dTPM 2.0 模組**：用於 **TXT** 與 **Boot Guard** 測試。
*   **儲存裝置**：
    *   至少 **2 顆**支援的 **NVMe SSD**（建立 RAID 1 卷冊所需）。
    *   多支 USB 隨身碟（用於存放驅動程式、EFI 工具與 OS 安裝媒體）。

---

### **三、 記憶體 (DIMM) 需求**
根據各測試計畫的規定，記憶體配置有嚴格要求：
*   **規格**：需使用 **2R x4 DDR5 RDIMM**。
*   **數量與容量**：
    *   **AMX 要求**：每個通道插滿一支 (1 DPC)，且總容量至少為 **128 GB**。
    *   **RDT/RAS 要求**：可使用 1 DPC 或 2 DPC。
*   **關鍵限制**：**絕對不可使用「不平衡」的插法 (In-balanced population)**，必須確保各通道對稱配置，否則 RDT 測試結果無效。

---

### **四、 軟體工具與韌體需求**
*   **BIOS/IFWI 版本**：必須套用最新發布的 **PV BKC (WW45 或以上版本)**，且需具備 **Debug 權限**以開啟 DFX 選單。
*   **偵錯工具**（安裝於 Host 端電腦）：
    *   **Intel CScripts (v0.7)**。
    *   **Intel® System Debugger (ISD-NDA U2546 或更高版本)**。
*   **專用腳本與工具包**：
    *   **AMX**: `AMX_validation.sh` 與 `Openvino_AMX_demo.sh`。
    *   **RDT**: `prw_rdt_val_test.sh`。
    *   **Security**: Server Security Toolkit (RDC#630398)、TPM 2.0 Provisioning Tool (RDC#633967)。
    *   **其他**: 十六進位編輯器 (Hex Editor)，用於 Boot Guard 破壞性測試。

### **綜合需求摘要表**
| 需求類別 | 關鍵項目 | 備註 |
| :--- | :--- | :--- |
| **關鍵設備** | **ITP-XDP 3BR**, **VROC Key**, **dTPM 2.0** | RAS 與安全測試必備 |
| **DIMM 數量** | **1 DPC (插滿通道)**, **總和 ≥ 128GB** | 嚴禁不平衡插法 |
| **作業系統** | Ubuntu 22.04, 24.04 與 Windows 11 | 建議分多顆 SSD 準備 |
| **韌體版本** | **BKC WW45+ (Debug Version)** | 需支援 DFX Global Configuration |
| **Host 軟體** | CScripts v0.7, ISD-NDA U2546+ | 需連接 ITP 進行錯誤注入 |

這套配置能讓您在同一台受測機器上，依序切換 BIOS 設定與 OS 環境，完成所有技術驗證項目。