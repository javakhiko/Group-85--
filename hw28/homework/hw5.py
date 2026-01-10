# 5) მომხმარებელს შეაყვანინე რიცხვები, მანამ სანამ არ შეიყვანს 0, ყოველი რიცხვის შემდეგ დაბეჭდე
#  "დადებითია" ან "უარყოფითია".დაბეჭდე ბოლოს რიცხვების ჯამი. გამოიყენე while loop.

sum=0
while True:
    num= int(input('Enter Number: '))
    if num==0:
        break
    if num>0:
        print("დადებითია")
    else:
        print( "უარყოფითია")
    
    sum += num

print(sum)
