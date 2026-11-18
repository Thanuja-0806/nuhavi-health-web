import zlib
import re

pdf_path = r"C:\Users\91818\.gemini\antigravity\brain\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96\.user_uploaded\media_1794818675546_daec6e67.pdf"

with open(pdf_path, 'rb') as f:
    data = f.read()

# Let's find objects with FlateDecode
objs = re.findall(rb'<<.*?/Filter\s*/FlateDecode.*?>>\s*stream[\r\n]+(.*?)[\r\n]+endstream', data, re.DOTALL)
print(f"Found {len(objs)} FlateDecode stream objects.")

all_text = []
for idx, stream in enumerate(objs):
    try:
        decomp = zlib.decompress(stream)
        # In PDF content streams, text is usually in BT ... ET blocks with Tj or TJ
        text_chunks = re.findall(rb'\((.*?)\)\s*Tj', decomp)
        if not text_chunks:
            # check TJ: [(...)...] TJ
            tj_blocks = re.findall(rb'\[(.*?)\]\s*TJ', decomp)
            for b in tj_blocks:
                text_chunks.extend(re.findall(rb'\((.*?)\)', b))
        
        if text_chunks:
            decoded_text = ' '.join(c.decode('latin1', errors='ignore') for c in text_chunks)
            all_text.append(f"--- Stream {idx} ---\n" + decoded_text)
    except Exception as e:
        # sometimes wbits=-15 works for raw deflate
        try:
            decomp = zlib.decompress(stream, -15)
            text_chunks = re.findall(rb'\((.*?)\)\s*Tj', decomp)
            if text_chunks:
                decoded_text = ' '.join(c.decode('latin1', errors='ignore') for c in text_chunks)
                all_text.append(f"--- Stream {idx} (raw) ---\n" + decoded_text)
        except Exception:
            pass

print(f"Extracted text from {len(all_text)} streams.")
full_pdf_text = '\n\n'.join(all_text)
with open('scratch/pdf_extracted_text.txt', 'w', encoding='utf-8') as out:
    out.write(full_pdf_text)

print("Saved to scratch/pdf_extracted_text.txt. Previewing first 2000 chars:")
print(full_pdf_text[:2000])

