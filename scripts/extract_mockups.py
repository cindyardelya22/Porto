import pymupdf
from PIL import Image, ImageFilter
import io
import os

pdf_path = r"C:\Users\HP\.gemini\antigravity-ide\brain\ee3b5c1d-1604-4997-a0c3-8a6553c2b599\.user_uploaded\media_1792899892100.pdf"
doc = pymupdf.open(pdf_path)

out_dir = r"d:\Porto\public\images\extracted"
os.makedirs(out_dir, exist_ok=True)

# Project mapping for the 5 pages
# Page 1: Al-Lumna (Proyek Akhir / Child Monitoring)
# Page 2: By-Pro (Sales Contract PTPN IV)
# Page 3: MindCare (UAS Mental Health)
# Page 4: AgriSmart GIS (PTPN IV)
# Page 5: Malaria Cell Classification (CNN)

page_names = {
    0: "allumna",
    1: "bypro",
    2: "mindcare",
    3: "agrismart",
    4: "malaria"
}

for page_idx in range(len(doc)):
    page = doc[page_idx]
    # Render page at 3x resolution (high quality DPI)
    zoom = 3.0
    mat = pymupdf.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat)
    
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    width, height = img.size
    
    # Save full page render
    img.save(os.path.join(out_dir, f"page_{page_idx+1}_full.png"))
    
    # Crop the center mockup illustration area
    # In Cindy's layout:
    # Left side is text, bottom is footer
    # Center-right has the devices mockup:
    # x approx 0.28 to 0.95, y approx 0.12 to 0.72
    crop_x1 = int(width * 0.26)
    crop_y1 = int(height * 0.12)
    crop_x2 = int(width * 0.96)
    crop_y2 = int(height * 0.72)
    
    mockup_crop = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
    name = page_names[page_idx]
    mockup_crop.save(os.path.join(out_dir, f"{name}_crop.png"))
    print(f"Saved {name} crop: {mockup_crop.size}")
