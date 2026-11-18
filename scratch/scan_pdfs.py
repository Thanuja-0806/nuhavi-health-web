import os
import re

pdf_dir = r"C:\Users\91818\.gemini\antigravity\brain\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96\.user_uploaded"

for fname in os.listdir(pdf_dir):
    if fname.endswith('.pdf'):
        fpath = os.path.join(pdf_dir, fname)
        size = os.path.getsize(fpath)
        print(f"\nScanning {fname} ({size} bytes)...")
        with open(fpath, 'rb') as f:
            content = f.read().decode('latin1', errors='ignore')
            for term in ['Liver Transplant', 'Dental Care', 'AYUSH', 'General Surgery', 'Cosmetic & Plastic', 'Cosmetic Surgery']:
                matches = [m.start() for m in re.finditer(re.escape(term), content, re.IGNORECASE)]
                if matches:
                    print(f"  Found '{term}': {len(matches)} occurrences")
                    for m in matches[:3]:
                        print("    Snippet:", repr(content[max(0, m - 50):m + 120]))

