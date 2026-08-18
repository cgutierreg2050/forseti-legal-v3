from PIL import Image

img = Image.open("assets/logo-mark.png").convert("RGBA")
datas = img.getdata()
newData = []
for item in datas:
    avg = (item[0] + item[1] + item[2]) / 3
    if avg > 235:
        # map 235->255 to alpha 255->0
        alpha = int(255 - (avg - 235) * (255 / 20))
        # Optional: darken the halo slightly to blend into dark backgrounds better
        newData.append((item[0], item[1], item[2], max(0, alpha)))
    else:
        newData.append(item)
img.putdata(newData)
img.save("assets/logo-mark.png", "PNG")
print("Background removed!")
