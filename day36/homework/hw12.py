# 12) დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

def fun(n):
    sum = 0
    for i in str(n):
        sum += int(i)
    return sum

print(fun(1234))