# 7) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში,
#  თუ ორი მეზობელი ელემენტის ჯამი <50-ზე მაშინ წაშალე მეორე ელემენტი, დაბეჭდე საბოლოო სია.
list = []

while True:
    user_input = int(input("Enter Number (type 0 to finish): "))
    if user_input == 0:
        break
    list.append(user_input)


i = 0
while i < len(list) - 1:
    if list[i] + list[i + 1] < 50:
        list.pop(i + 1)
    else:
        i += 1

print(list)