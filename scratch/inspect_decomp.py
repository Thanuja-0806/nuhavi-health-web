import zlib
import re

pdf_path = r"C:\Users\91818\.gemini\antigravity\brain\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96\.user_uploaded\media_1794818675546_daec6e67.pdf"

with open(pdf_path, 'rb') as f:
    data = f.read()

objs = re.findall(rb'<<.*?/Filter\s*/FlateDecode.*?>>\s*stream[\r\n]+(.*?)[\r\n]+endstream', data, re.DOTALL)
for idx, stream in enumerate(objs):
    try:
        decomp = zlib.decompress(stream)
        if b'BT' in decomp:
            print(f"Stream {idx} has BT! Length {len(decomp)}")
            print(decomp[:500])
            break
    except Exception:
        pass

