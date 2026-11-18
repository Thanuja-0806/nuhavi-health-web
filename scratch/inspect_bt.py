import zlib
import re

pdf_path = r"C:\Users\91818\.gemini\antigravity\brain\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96\.user_uploaded\media_1794818675546_daec6e67.pdf"

with open(pdf_path, 'rb') as f:
    data = f.read()

objs = re.findall(rb'<<.*?/Filter\s*/FlateDecode.*?>>\s*stream[\r\n]+(.*?)[\r\n]+endstream', data, re.DOTALL)
decomp = zlib.decompress(objs[0])

bt_blocks = re.findall(rb'BT(.*?)ET', decomp, re.DOTALL)
print(f"Found {len(bt_blocks)} BT blocks in Stream 0.")
for b in bt_blocks[:10]:
    print("Block:", b[:120])

