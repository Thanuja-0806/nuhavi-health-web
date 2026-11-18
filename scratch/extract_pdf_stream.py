import zlib
import re

pdf_path = r"C:\Users\91818\.gemini\antigravity\brain\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96\.user_uploaded\media_1794818675546_daec6e67.pdf"

with open(pdf_path, 'rb') as f:
    data = f.read()

# Find all streams
stream_regex = re.compile(rb'stream[\r\n]+([\s\S]*?)[\r\n]+endstream')
for idx, m in enumerate(stream_regex.finditer(data)):
    s_bytes = m.group(1)
    try:
        decomp = zlib.decompress(s_bytes)
        text = decomp.decode('utf-8', errors='ignore')
        if any(term in text for term in ['Dental', 'Liver', 'AYUSH', 'Surgery', 'Cosmetic', 'Popular']):
            print(f"=== Stream {idx} ({len(text)} chars) ===")
            for line in text.split('\n'):
                if any(k in line for k in ['Popular', 'Latest', 'Dental', 'Liver', 'AYUSH', 'General Surgery', 'Cosmetic']):
                    print(" ", line[:150])
    except Exception:
        pass

