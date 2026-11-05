import pymupdf
from PIL import Image, ImageOps, ImageDraw, ImageFilter
import io
import os

pdf_path = r"c:\Users\VICTUS\Downloads\Proposal Projek Akhir NLP [KLP 8]_FIX.docx.pdf"
doc = pymupdf.open(pdf_path)

out_images_dir = r"public\images"
out_extracted_dir = r"public\images\extracted"
os.makedirs(out_extracted_dir, exist_ok=True)

print(f"Total pages: {len(doc)}")

# Render each page to inspect or extract images
for p_idx in [9, 10, 11, 12]: # 0-indexed for pages 10, 11, 12, 13
    page = doc[p_idx]
    zoom = 3.0
    mat = pymupdf.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat)
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    save_path = os.path.join(out_extracted_dir, f"emoscan_page_{p_idx+1}.png")
    img.save(save_path)
    print(f"Saved page {p_idx+1} at {img.size}")

# Let's inspect page 11 (index 10) which has the updated EmoScan interface screenshots
# or extract the image objects from the PDF itself!
img_list = doc[10].get_images(full=True)
print(f"Images in page 11: {len(img_list)}")
for i, img_info in enumerate(img_list):
    xref = img_info[0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image["image"]
    image_ext = base_image["ext"]
    img_obj = Image.open(io.BytesIO(image_bytes))
    extracted_path = os.path.join(out_extracted_dir, f"emoscan_raw_{i}.{image_ext}")
    img_obj.save(extracted_path)
    print(f"Extracted raw image {i}: {img_obj.size}, format: {image_ext}")

