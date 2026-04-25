import os
import shutil

output_dir = r"c:\Users\lucas\Desktop\Erick\tica-website-exact-match\src\assets\editorial"
os.makedirs(output_dir, exist_ok=True)

input_images = [
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091595092.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588742.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588717.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588685.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588606.png"
]

for i, img_path in enumerate(input_images):
    try:
        out_name = f"editorial_glasses_{i+1}.jpg"
        out_path = os.path.join(output_dir, out_name)
        
        # We need to save as jpg to match the existing imports
        from PIL import Image
        img = Image.open(img_path)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        img.save(out_path, "JPEG", quality=90)
        
        print(f"Copied original {img_path} to {out_path}")
    except Exception as e:
        print(f"Error copying {img_path}: {e}")
