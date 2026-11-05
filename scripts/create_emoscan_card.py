import os
from PIL import Image, ImageOps, ImageDraw, ImageFilter

# Page 11 img 4 is the updated EmoScan interface with analysis result
raw_ui = Image.open(r"public/images/extracted/emoscan_raw_4.png").convert("RGBA")

# Target dimensions matching other project cards: 1600 x 1000
target_w, target_h = 1600, 1000

# Create soft gradient background (Modern Indigo & Sky Blue theme)
canvas = Image.new("RGBA", (target_w, target_h), (255, 255, 255, 255))
draw = ImageDraw.Draw(canvas)

bg_top = (238, 244, 255)    # Soft serene pastel sky/indigo
bg_bottom = (224, 236, 254) # Calm soft blue
r1, g1, b1 = bg_top
r2, g2, b2 = bg_bottom

for y in range(target_h):
    factor = y / float(target_h)
    r = int(r1 + (r2 - r1) * factor)
    g = int(g1 + (g2 - g1) * factor)
    b = int(b1 + (b2 - b1) * factor)
    draw.line([(0, y), (target_w, y)], fill=(r, g, b, 255))

# We can crop the center browser window or fit the browser window nicely
# The image is 1920x1080. Let's see if we can crop slightly or center it.
# Let's crop slightly borders if needed or use the clean window:
# Usually browser screenshot has browser header at top. We can keep it or frame it.
fit_w = int(target_w * 0.88) # 1408
aspect = raw_ui.width / raw_ui.height # 1920/1080 = 1.777
fit_h = int(fit_w / aspect) # 792

if fit_h > int(target_h * 0.86):
    fit_h = int(target_h * 0.86)
    fit_w = int(fit_h * aspect)

resized_ui = raw_ui.resize((fit_w, fit_h), Image.Resampling.LANCZOS)

# Rounded corner mask for the card
radius = 20
mask = Image.new("L", (fit_w, fit_h), 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.rounded_rectangle([(0, 0), (fit_w, fit_h)], radius=radius, fill=255)

# Soft drop shadow
shadow_pad = 32
shadow = Image.new("RGBA", (fit_w + shadow_pad * 2, fit_h + shadow_pad * 2), (0, 0, 0, 0))
shadow_draw = ImageDraw.Draw(shadow)
shadow_draw.rounded_rectangle(
    [(shadow_pad, shadow_pad + 12), (fit_w + shadow_pad, fit_h + shadow_pad + 12)],
    radius=radius,
    fill=(15, 23, 42, 45)
)
shadow = shadow.filter(ImageFilter.GaussianBlur(20))

pos_x = (target_w - fit_w) // 2
pos_y = (target_h - fit_h) // 2

canvas.paste(shadow, (pos_x - shadow_pad, pos_y - shadow_pad), shadow)
canvas.paste(resized_ui, (pos_x, pos_y), mask)

# Save emoscan.jpg
final_rgb = canvas.convert("RGB")
final_rgb.save(r"public/images/emoscan.jpg", "JPEG", quality=95)
print("Saved public/images/emoscan.jpg successfully!")

# Also save emoscan_crop.png
resized_ui.save(r"public/images/extracted/emoscan_crop.png")

