# 2) შექმენით ფუნქცია. შექმენით რიცხვებით სავსე სია, დაბეჭდეთ სიის უდიდესი ელემენტი. არ გამოიყენოთ max() ფუნქცია, გამოიყენეთ for ციკლი. გამოიძახეთ ფუნქცია.
def find_max():
    numbers = [3, 7, 2, 15, 9, 4]
    
    largest = numbers[0]

    for i in numbers:
        if i > largest:
            largest = i

    print(largest)

find_max()