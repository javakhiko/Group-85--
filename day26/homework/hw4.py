# 4) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, თუ რიცხვი უკვე არსებობს სიაში შეწყვიტე შეყვანა, 
# სხვა შემთხვევაში დაამატე რიცხვები სიაში, ბოლოს დაბეჭდე მთლიანი სია

list=[]

while True:
    user_input = input("Enter number: ")
    
    if user_input in list:
        break
    else:
        list.append(user_input)
print(list)