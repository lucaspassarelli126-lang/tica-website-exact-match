import os
from rembg import remove, new_session
from PIL import Image

output_dir = r"c:\Users\lucas\Desktop\Erick\tica-website-exact-match\src\assets\products"

input_images = [
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091595092.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588742.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588717.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588685.png",
    r"C:\Users\lucas\.gemini\antigravity\brain\e55d4573-3862-485e-980f-dfe84c0ec2dc\media__1777091588606.png"
]

TARGET_SIZE = (559, 447)
TARGET_WIDTH = 506 # width of the glasses themselves

session = new_session("u2net") # using default model, but with alpha matting

for i, img_path in enumerate(input_images):
    try:
        print(f"Processing {img_path}...")
        input_image = Image.open(img_path)
        
        # Remove background with alpha matting to better handle transparent lenses
        output_image = remove(
            input_image, 
            session=session,
            alpha_matting=True,
            alpha_matting_foreground_threshold=240,
            alpha_matting_background_threshold=10,
            alpha_matting_erode_size=10
        )
        
        # Crop to bounding box (the actual glasses)
        bbox = output_image.getbbox()
        if bbox:
            output_image = output_image.crop(bbox)
        
        # Calculate new size maintaining aspect ratio
        aspect_ratio = output_image.height / output_image.width
        new_width = TARGET_WIDTH
        new_height = int(new_width * aspect_ratio)
        
        # Resize glasses
        output_image = output_image.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Create final transparent canvas
        final_canvas = Image.new("RGBA", TARGET_SIZE, (0, 0, 0, 0))
        
        # Calculate position to paste (centered)
        paste_x = (TARGET_SIZE[0] - new_width) // 2
        paste_y = (TARGET_SIZE[1] - new_height) // 2
        
        final_canvas.paste(output_image, (paste_x, paste_y), output_image)
        
        # Save
        out_name = f"new_glasses_{i+1}.png"
        out_path = os.path.join(output_dir, out_name)
        final_canvas.save(out_path, "PNG")
        print(f"Saved aligned image to {out_path}")
        
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

print("Processing and alignment complete!")
