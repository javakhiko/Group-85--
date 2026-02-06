# 2) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და დაითვლის ამ ტექსტში ხმოვნების რაოდენობას

def fun():
    text = input()
    vowels = "aeiou"
    count = 0

    for i in text.lower():
        if i in vowels:
            count += 1

    return count

print(fun())
        