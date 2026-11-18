import pypdf
import os

pdf_dir = r"C:\Users\91818\.gemini\antigravity\brain\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96\.user_uploaded"
for f in os.listdir(pdf_dir):
    if f.endswith('.pdf'):
        p = os.path.join(pdf_dir, f)
        try:
            reader = pypdf.PdfReader(p)
            print(f"=== {f} ({len(reader.pages)} pages) ===")
            text_p1 = reader.pages[0].extract_text()[:300].replace('\n', ' ')
            print("Page 1 snippet:", text_p1)
            # Check if there is an outline/bookmarks
            if reader.outline:
                print("Outline items:", len(reader.outline))
        except Exception as e:
            print(f"Error reading {f}: {e}")

