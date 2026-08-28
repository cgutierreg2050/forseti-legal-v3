from PIL import Image
import os

input_path = "/Users/kristhian/.gemini/antigravity/brain/c1f58bc9-2da0-4e41-a697-8a4911983dc6/.user_uploaded/media_1787888126373.jpg"
output_path = "assets/logo-mark.png"

img = Image.open(input_path).convert("RGBA")
datas = img.getdata()
newData = []
for item in datas:
    avg = (item[0] + item[1] + item[2]) / 3
    if avg > 240:
        newData.append((255, 255, 255, 0)) # Fully transparent
    elif avg > 220:
        alpha = int(255 - ((avg - 220) * (255 / 20)))
        newData.append((item[0], item[1], item[2], max(0, alpha)))
    else:
        newData.append(item)
img.putdata(newData)
img.save(output_path, "PNG")
print("Background removed from new logo!")
