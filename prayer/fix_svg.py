import argparse
import os
import re
import shutil
import sys
import xml.etree.ElementTree as ET

# SVG 內 foreignObject 常夾 HTML void 元素, XML 不認 <br> 這種寫法
VOID_TAGS = ("area", "base", "br", "col", "embed", "hr", "img",
             "input", "link", "meta", "param", "source", "track", "wbr")
VOID_RE = re.compile(
    r"<(" + "|".join(VOID_TAGS) + r")(\s[^<>]*?)?(?<!/)>",
    re.IGNORECASE,
)


def fix_content(text):
    """補上 void 元素自閉斜線, 回傳 (新字串, 修正數)."""
    count = [0]

    def _sub(m):
        count[0] += 1
        tag, attrs = m.group(1), (m.group(2) or "")
        return "<%s%s/>" % (tag, attrs.rstrip())

    return VOID_RE.sub(_sub, text), count[0]


def check_xml(text, name=""):
    try:
        ET.fromstring(text.encode("utf-8"))
        return True, ""
    except ET.ParseError as e:
        return False, "%s: %s" % (name, e)


def fix_file(path, backup=True, dry_run=False):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    fixed, n = fix_content(text)
    ok, err = check_xml(fixed, path)
    if dry_run:
        print("[%s] %s: %d 處待修, XML %s%s" % (
            "檢查", path, n, "OK" if ok else "仍有錯",
            (" (%s)" % err) if not ok else ""))
        return n
    if n > 0:
        if backup:
            shutil.copy2(path, path + ".bak")
        with open(path, "w", encoding="utf-8") as f:
            f.write(fixed)
    print("[%s] %s: 修正 %d 處, XML %s%s" % (
        "完成", path, n, "OK" if ok else "仍有錯",
        (" (%s)" % err) if not ok else ""))
    return n


def collect(paths, recursive=False):
    files = []
    for p in paths:
        if os.path.isdir(p):
            if recursive:
                for root, _, fns in os.walk(p):
                    files += [os.path.join(root, fn) for fn in fns
                              if fn.lower().endswith(".svg")]
            else:
                files += [os.path.join(p, fn) for fn in os.listdir(p)
                          if fn.lower().endswith(".svg")]
        elif p.lower().endswith(".svg"):
            files.append(p)
        else:
            print("跳過非 SVG: %s" % p)
    return files


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description="修正 SVG 內未自閉 HTML void 標籤 (<br> -> <br/>)")
    ap.add_argument("paths", nargs="+", help="SVG 檔或資料夾")
    ap.add_argument("--check", action="store_true", help="只檢查不寫入")
    ap.add_argument("--no-backup", action="store_true", help="不留 .bak 備份")
    ap.add_argument("-r", "--recursive", action="store_true", help="資料夾遞迴")
    args = ap.parse_args()

    targets = collect(args.paths, args.recursive)
    if not targets:
        print("找不到 SVG 檔")
        sys.exit(1)
    total = sum(fix_file(p, backup=not args.no_backup, dry_run=args.check)
                for p in targets)
    print("共 %d 檔, 修正 %d 處" % (len(targets), total))
