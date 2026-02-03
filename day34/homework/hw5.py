# 5) შექმენით ფუნქცია. შექმენი რიცხვებით სავსე სია, სადაც დუბლიკატები - ანუ გამეორებული ელემენტები აღარ იქნება, მაგრამ ელემენტების თანმიმდევრობა შენარჩუნდეს. მაგალითად თუ მოცემული გვქონდა სია: [1, 2, 2, 3, 3, 4, 5, 6, 5], უნდა დავპრინტოთ [1, 2, 3, 4, 5, 6]. გამოიყენე for ციკლი და if. გამოიძახეთ ფუნქცია.

def remove_duplicates():
    numbers = [1, 2, 2, 3, 3, 4, 5, 6, 5]
    unique_numbers = []

    for num in numbers:
        if num not in unique_numbers:
            unique_numbers.append(num)

    print(unique_numbers)

remove_duplicates()