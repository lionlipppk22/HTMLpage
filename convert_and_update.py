import os
from PIL import Image

def process_images_and_html(target_folder=".", html_file="index.html"):
    """
    1. 將資料夾下的 .png 轉為 .jpg
    2. 取代 html 中的檔名
    """
    
    # 檢查 HTML 檔案是否存在
    if not os.path.exists(os.path.join(target_folder, html_file)):
        print(f"錯誤: 找不到 {html_file}")
        return

    # 讀取 HTML 內容
    html_path = os.path.join(target_folder, html_file)
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # 取得資料夾內所有檔案
    files = os.listdir(target_folder)
    
    convert_count = 0
    
    print("--- 開始處理 ---")

    for filename in files:
        # 判斷是否為 png 檔 (不區分大小寫)
        if filename.lower().endswith(".png"):
            
            # 設定舊檔名與新檔名
            old_name = filename
            # 使用 splitext 確保只換掉副檔名
            base_name = os.path.splitext(filename)[0]
            new_name = base_name + ".jpg"
            
            # --- 步驟 1: 圖片轉檔 ---
            try:
                img_path = os.path.join(target_folder, old_name)
                with Image.open(img_path) as img:
                    # PNG 可能有透明背景 (RGBA)，JPG 不支援透明
                    # 必須轉換為 RGB 模式，否則會報錯
                    rgb_im = img.convert('RGB')
                    
                    # 儲存為 jpg
                    save_path = os.path.join(target_folder, new_name)
                    rgb_im.save(save_path, quality=90) # quality 可調整壓縮品質
                    print(f"[轉檔成功] {old_name} -> {new_name}")
                    
                # --- 步驟 2: 修改 HTML 內容字串 ---
                if old_name in html_content:
                    html_content = html_content.replace(old_name, new_name)
                    print(f"[HTML更新] 將 {old_name} 替換為 {new_name}")
                
                convert_count += 1
                
            except Exception as e:
                print(f"[失敗] 無法處理 {old_name}: {e}")

    # --- 步驟 3: 將修改後的內容寫回 HTML ---
    if convert_count > 0:
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"--- 處理完成 ---")
        print(f"共轉換 {convert_count} 張圖片，並已更新 {html_file}")
    else:
        print("沒有找到任何 .png 檔案，未進行任何修改。")

if __name__ == "__main__":
    # 設定你的資料夾路徑 ('.' 代表目前資料夾)
    # 設定你的 HTML 檔名
    process_images_and_html(target_folder=".", html_file="index.html")