Wrom PIL import Image
import os

banners = ['promo-completo.png', 'promo-kids.png', 'promo-games.png', 'promo-clipon.png']
base_path = 'src/assets/banners/'

for f in banners:
    path = os.path.join(base_path, f)
    if os.path.exists(path):
        img = Image.open(path)
        print(f"{f}: {img.size} {os.path.getsize(path)} bytes")
    else:
        print(f"{f} not found")
