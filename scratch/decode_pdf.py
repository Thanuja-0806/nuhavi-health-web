import zlib
import re

pdf_path = r"C:\Users\91818\.gemini\antigravity\brain\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96\.user_uploaded\media_1794818675546_daec6e67.pdf"

with open(pdf_path, 'rb') as f:
    data = f.read()

# Find all ToUnicode cmaps
cmap_objs = re.findall(rb'<<.*?/Filter\s*/FlateDecode.*?>>\s*stream[\r\n]+(.*?)[\r\n]+endstream', data, re.DOTALL)

char_maps = {}
for s in cmap_objs:
    try:
        decomp = zlib.decompress(s)
        if b'beginbfchar' in decomp or b'beginbfrange' in decomp:
            # Parse bfchar
            for m in re.finditer(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', decomp):
                c_src = int(m.group(1), 16)
                c_dst = chr(int(m.group(2), 16))
                char_maps[c_src] = c_dst
            # Parse bfrange: <0001> <0003> <0041>
            for m in re.finditer(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', decomp):
                start = int(m.group(1), 16)
                end = int(m.group(2), 16)
                dst = int(m.group(3), 16)
                for code in range(start, end + 1):
                    char_maps[code] = chr(dst + (code - start))
    except Exception:
        pass

print(f"Loaded {len(char_maps)} character mappings!")

# Now decode Stream 0!
decomp0 = zlib.decompress(cmap_objs[0])
hex_tokens = re.findall(rb'<([0-9A-Fa-f]+)>\s*Tj', decomp0)
decoded = []
for h in hex_tokens:
    # could be 2-digit or 4-digit
    val = int(h, 16)
    decoded.append(char_maps.get(val, '?'))

text = ''.join(decoded)
print("Decoded sample from Stream 0:")
print(text[:500])

