from PIL import Image

# Re-read the ORIGINAL uploaded JPG since we mangled the PNG
import os
img = Image.open("/Users/kristhian/.gemini/antigravity/brain/c1f58bc9-2da0-4e41-a697-8a4911983dc6/.user_uploaded/media_1787025195577.jpg").convert("RGBA")
datas = img.getdata()
newData = []
for item in datas:
    avg = (item[0] + item[1] + item[2]) / 3
    if avg > 240:
        newData.append((255, 255, 255, 0)) # Fully transparent
    elif avg > 220:
        # Smooth blend from 220 to 240
        # at 220, alpha = 255
        # at 240, alpha = 0
        alpha = int(255 - ((avg - 220) * (255 / 20)))
        newData.append((item[0], item[1], item[2], max(0, alpha)))
    else:
        newData.append(item)
img.putdata(newData)
img.save("assets/logo-mark.png", "PNG")
print("Background removed perfectly!")
