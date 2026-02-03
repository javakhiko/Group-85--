# 3) შექმენით ფუნქცია. შექმენით რიცხვებით სავსე სია, დაბეჭდეთ ამ სიის ყველა ლუწი ელემენტის ჯამი. გამოიყენე for ციკლი.  გამოიძახეთ ფუნქცია.
def sum_even_nums():
    numbers = [1, 4, 7, 10, 12, 3, 6]
    total = 0

    for num in numbers:
        if num % 2 == 0:
            total += num

    print(total)

sum_even_nums()