from PIL import Image
import numpy as np

img = Image.open("c:/Users/lucas/Desktop/Erick/tica-website-exact-match/src/assets/banners/promo-99-v2.png").convert("RGBA")
# Find bounding box of non-white pixels (or non-transparent, but it's likely white background)
# Let's look for pixels that are not close to white (255, 255, 255)
data = np.array(img)
# Create a mask of pixels that are NOT white (or very close to it)
# Thresholding: any pixel where R, G, or B is < 250
mask = (data[:, :, 0] < 250) | (data[:, :, 1] < 250) | (data[:, :, 2] < 250)
coords = np.argwhere(mask)
if coords.size > 0:
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0) + 1
    # Crop the image
    cropped = img.crop((x0, y0, x1, y1))
    cropped.save("c:/Users/lucas/Desktop/Erick/tica-website-exact-match/src/assets/banners/promo-99-v2.png")
    print(f"Cropped from {img.size} to {cropped.size}")
else:
    print("No content found to crop")
