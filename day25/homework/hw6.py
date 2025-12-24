# 6) შექმენი ცარიელი list, მომხმარებელს 5-ჯერ შეაყვანინე რიცხვი, 
# ყველა დაამატე list-ში და საბოლოოდ for loop-ის გამოყენებით დააჯამე რიცხვები რომელიც გექნება ლისტში

list=[]
num1=int(input('Enter First Number: '))
num2=int(input('Enter Second Number: '))
num3=int(input('Enter Third Number: '))
num4=int(input('Enter Fourth Number: '))
num5=int(input('Enter Fifth Number: '))
list.append(num1)
list.append(num2)
list.append(num3)
list.append(num4)
list.append(num5)
print('list - ', list)
sum = 0
for i in list:
    sum += i

print(sum)
