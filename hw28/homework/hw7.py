# 7) მომხმარებელს შეაყვანინე რიცხვი 1–5. დაბეჭდე სიტყვებით, მაგალითად: 1 → One 2 → Two გამოიყენე if / elif / else

num = int(input("Enter Numbers From 1 to 5: "))

if num == 1:
    print("1 → One")
elif num == 2:
    print("2 → Two")
elif num == 3:
    print("3 → Three")
elif num == 4:
    print("4 → Four")
elif num == 5:
    print("5 → Five")
else:
    print("Wrong Num")