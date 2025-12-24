# 9) შექმენი list: nums = [1, 2, 3, 4] მომხმარებელს შეაყვანინე: ინდექსი და რიცხვი, 
# თუ ინდექსი list-ის საზღვრებშია გამოიყენე insert() ჩასამატებლად, თუ ინდექსი ლისტზე დიდია მაშინ გამოიყენე append()

nums = [1, 2, 3, 4]
index=int(input('Enter Index: '))
num=int(input('Enter Number: '))
if index==len(nums):
    nums.insert(index, num)
    print(nums)
else:
    nums.append(num)
    print(nums)