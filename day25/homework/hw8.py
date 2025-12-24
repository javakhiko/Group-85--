# 8) შექმენი list: animals = ["dog", "cat", "horse", "cow"] მომხმარებელს შეაყვანინე ცხოველის სახელი,
# თუ არსებობს  დაბეჭდე მისი index-იმ, თუ არა  "Animal not found"

animals = ["dog", "cat", "horse", "cow"]
animal=input('Enter Name Of The Animal: ')
if animal in animals:
    print('The Animal Already in The List: ', animals.index(animal) )
else:
    print('Animal Not Found')