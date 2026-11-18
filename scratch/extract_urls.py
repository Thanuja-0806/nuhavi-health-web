import re

pdf_path = r"C:\Users\91818\.gemini\antigravity\brain\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96\.user_uploaded\media_1794818675546_daec6e67.pdf"

with open(pdf_path, 'rb') as f:
    data = f.read()

urls = re.findall(rb'https://claude\.ai/artifact/[^\s\)>]+', data)
print("URLs found in PDF:")
for u in set(urls):
    print(u.decode('latin1'))

