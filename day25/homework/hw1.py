# 1) შექმენი list: names = ["nika", "luka", "giorgi"] მომხმარებელს შეაყვანინე: ინდექსი და სახელი, 
# insert()-ის გამოყენებით ჩასვი სახელი მითითებულ ადგილას და დაბეჭდე შედეგი

names = ["nika", "luka", "giorgi"]

insert_content_index=int(input('Enter index(where do u want ur content to be located 0-3): '))
insert_content=input('Enter content: ')
names.insert(insert_content_index,insert_content)
print(names)