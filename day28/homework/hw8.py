# 8) მომხმარებელს შეაყვანინე 5 რიცხვი while loopით, დაითვალე მათი საშუალო, თუ საშუალო > 50 დაბეჭდე 
# "დიდი საშუალო" წინააღმდეგ შემთხვევაში "პატარა საშუალო"

sum = 0
count = 0

while count < 5:
    num = int(input("Enter Num: "))
    total += num
    count += 1

average = total / 5

if average > 50:
    print("Big Average")
else:
    print("Small Average")