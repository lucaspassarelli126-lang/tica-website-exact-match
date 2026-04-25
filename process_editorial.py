import os
from PIL import Image, ImageOps

output_dir = r"c:\Users\lucas\Desktop\Erick\tica-website-exact-match\src\assets\editorial"
os.makedirs(output_dir, exist_ok=True)

input_images = [
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091595092.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588742.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588717.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588685.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588606.png"
]

TARGET_ASPECT = 4 / 3

for i, img_path in enumerate(input_images):
    try:
        img = Image.open(img_path)
        
        # Calculate target dimensions
        w, h = img.size
        target_w, target_h = w, h
        
        if w / h > TARGET_ASPECT:
            # Image is too wide
            target_w = int(h * TARGET_ASPECT)
        else:
            # Image is too tall
            target_h = int(w / TARGET_ASPECT)
            
        # Crop center
        left = (w - target_w) / 2
        top = (h - target_h) / 2
        right = (w + target_w) / 2
        bottom = (h + target_h) / 2
        
        cropped_img = img.crop((left, top, right, bottom))
        
        # Save as JPG for smaller file size
        out_name = f"editorial_glasses_{i+1}.jpg"
        out_path = os.path.join(output_dir, out_name)
        
        # Convert to RGB before saving as JPG
        if cropped_img.mode in ('RGBA', 'P'):
            cropped_img = cropped_img.convert('RGB')
            
        cropped_img.save(out_path, "JPEG", quality=90)
        print(f"Processed and saved {out_name}")
        
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

print("Done cropping original images!")
