import os
from PIL import Image, ImageOps, ImageDraw, ImageFilter

extracted_dir = r"d:\Porto\public\images\extracted"
output_dir = r"d:\Porto\public\images"

# Background palettes for Dribbble presentation cards
themes = {
    "mindcare": {
        "bg_top": (245, 235, 255),    # Soft pastel lavender
        "bg_bottom": (255, 238, 246), # Soft pastel rose
        "accent": (168, 85, 247),
    },
    "bypro": {
        "bg_top": (230, 249, 240),    # Soft pastel mint
        "bg_bottom": (238, 253, 245), # Soft palm green
        "accent": (16, 185, 129),
    },
    "allumna": {
        "bg_top": (255, 247, 237),    # Soft pastel warm peach
        "bg_bottom": (254, 243, 199), # Soft pastel amber
        "accent": (245, 158, 11),
    },
    "agrismart": {
        "bg_top": (236, 254, 255),    # Soft pastel cyan
        "bg_bottom": (240, 253, 250), # Soft pastel teal
        "accent": (20, 184, 166),
    },
    "malaria": {
        "bg_top": (255, 241, 242),    # Soft pastel rose
        "bg_bottom": (253, 242, 248), # Soft pastel pink
        "accent": (244, 63, 94),
    },
}

target_w, target_h = 1600, 1000

for name, theme in themes.items():
    crop_path = os.path.join(extracted_dir, f"{name}_crop.png")
    if not os.path.exists(crop_path):
        continue
    
    crop_img = Image.open(crop_path).convert("RGBA")
    
    # Create smooth gradient canvas
    canvas = Image.new("RGBA", (target_w, target_h), (255, 255, 255, 255))
    draw = ImageDraw.Draw(canvas)
    
    r1, g1, b1 = theme["bg_top"]
    r2, g2, b2 = theme["bg_bottom"]
    
    for y in range(target_h):
        factor = y / float(target_h)
        r = int(r1 + (r2 - r1) * factor)
        g = int(g1 + (g2 - g1) * factor)
        b = int(b1 + (b2 - b1) * factor)
        draw.line([(0, y), (target_w, y)], fill=(r, g, b, 255))
        
    # Resize crop to fit nicely in center
    # Keep aspect ratio
    crop_aspect = crop_img.width / crop_img.height
    fit_w = int(target_w * 0.90)
    fit_h = int(fit_w / crop_aspect)
    
    if fit_h > int(target_h * 0.88):
        fit_h = int(target_h * 0.88)
        fit_w = int(fit_h * crop_aspect)
        
    resized_crop = crop_img.resize((fit_w, fit_h), Image.Resampling.LANCZOS)
    
    # Soft rounded corners mask for the device showcase
    mask = Image.new("L", (fit_w, fit_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([(0, 0), (fit_w, fit_h)], radius=24, fill=255)
    
    # Soft dropshadow behind mockup
    shadow_pad = 28
    shadow = Image.new("RGBA", (fit_w + shadow_pad * 2, fit_h + shadow_pad * 2), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle(
        [(shadow_pad, shadow_pad + 8), (fit_w + shadow_pad, fit_h + shadow_pad + 8)],
        radius=24,
        fill=(0, 0, 0, 35)
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(16))
    
    pos_x = (target_w - fit_w) // 2
    pos_y = (target_h - fit_h) // 2
    
    # Paste shadow
    canvas.paste(shadow, (pos_x - shadow_pad, pos_y - shadow_pad), shadow)
    
    # Paste rounded crop
    canvas.paste(resized_crop, (pos_x, pos_y), mask)
    
    # Save as high quality JPG in public/images
    final_rgb = canvas.convert("RGB")
    out_file = os.path.join(output_dir, f"{name}.jpg")
    final_rgb.save(out_file, "JPEG", quality=95)
    print(f"Generated enhanced authentic mockup for {name}: {out_file}")
