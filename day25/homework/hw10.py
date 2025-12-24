# 10) შექმენი list: tasks = ["homework", "clean room", "exercise"] 
# მომხმარებელს ჰკითხე Are you sure you want to delete all tasks? (yes/no). თუ "yes" მთლიანად გაასუფთავე ლისთი,
# თუ "no" არაფერი შეცვალო.

tasks = ["homework", "clean room", "exercise"] 
question=input('Are you sure you want to delete all tasks? (yes/no): ')
if question=='yes':
    tasks.clear
    print('Tasks Were Succesfully Deleted')
elif question=='no':
    print('Nothing Changed')
else:
    print('Enter Text Correctly!')