import os
from rembg import remove
from PIL import Image

# Output directory for processed images
output_dir = r"c:\Users\lucas\Desktop\Erick\tica-website-exact-match\src\assets\products"
os.makedirs(output_dir, exist_ok=True)

# Input images from the chat attachments
input_images = [
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091595092.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588742.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588717.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588685.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588606.png"
]

processed_files = []

for i, img_path in enumerate(input_images):
    try:
        if not os.path.exists(img_path):
            print(f"File not found: {img_path}")
            continue
            
        print(f"Processing {img_path}...")
        input_image = Image.open(img_path)
        
        # Remove background
        output_image = remove(input_image)
        
        # Save as PNG
        out_name = f"new_glasses_{i+1}.png"
        out_path = os.path.join(output_dir, out_name)
        output_image.save(out_path, "PNG")
        processed_files.append(out_path)
        print(f"Saved to {out_path}")
        
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

print("Processing complete!")
