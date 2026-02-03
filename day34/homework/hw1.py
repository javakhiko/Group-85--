# 1) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ ერთი მთელი რიცხვი n. დაბეჭდეთ თუ რამდენი ლუწი რიცხვია 1-დან n-მდე. გამოიძახეთ ფუნქცია.
def count_even():
    n = int(input("Enter Num: "))
    count = 0

    for i in range(1, n + 1):
        if i % 2 == 0:
            count += 1

    print(count)

count_even()