# 2) შექმენი list: fruits = ["apple", "banana", "apple", "orange"] მომხმარებელს შეაყვანინე ხილი, თუ list-ში უკვე არის
#  ეს ხილი remove()-ით წაშალე მხოლოდ პირველი შემხვედრი, თუ არ არის ლისტში მაშინ დაბეჭდე შესაბამისი შეტყობინება

fruits = ["apple", "banana", "apple", "orange"]
insert_fruit=input('Enter What Kind Of Fruit Do You Want to add To the list: ')
if insert_fruit in fruits:
    fruits.remove(insert_fruit)
    print(fruits)
    print('fruit was removed from the list')
else:
    fruits.insert(4,insert_fruit)
    print(fruits)
    print('Succesfully Added')