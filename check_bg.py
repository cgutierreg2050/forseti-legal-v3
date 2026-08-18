from PIL import Image

img = Image.open("assets/logo-mark.png").convert("RGBA")
width, height = img.size

# Check top-left corner
tl = img.getpixel((0, 0))
tr = img.getpixel((width-1, 0))
bl = img.getpixel((0, height-1))
br = img.getpixel((width-1, height-1))
print("Corner pixels:", tl, tr, bl, br)
