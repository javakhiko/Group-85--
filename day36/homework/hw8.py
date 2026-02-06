# 8) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და ასევე რაღაც რიცხვს,
#  ტექსტსში ყველა ასოა აქციე დიდად და რიცხვითი მნიშვნელობა გადააქცია სტრინგის ტიპად.

def fun():
    text=input('Enter Text: ')
    num=int(input('Enter Num: '))
    return text.upper() + str(num)

print(fun())

# პარამეტრების ვარიანტი 

def func(word, n):
    return word.upper() + str(n)

print(fun("hello", 5))
