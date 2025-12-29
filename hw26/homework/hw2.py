# 2) შექმენი ცარიელი სია. მომხმარებელს შეაყვანინე რიცხვები სანამ "stop"-ს არ დაბეჭდავს, ყოველი ახალი რიცხვი:
#  თუ ნაკლებია 50-ზე → ჩასვი სიის დასაწყისში (insert), თუ მეტია ან ტოლია 50-ის → დაამატე ბოლოში (append),
#  ბოლოს დაბეჭდე სია

list=[]
while True:
    user_input = input("Enter number (type 'stop' to finish): ")
    
    if type(user_input)==int:
        if int(user_input)<50:
            list.insert(0,int(user_input))
        elif int(user_input)>50:
            list.append(int(user_input))
    else:
        if user_input== "stop":
            break
    
    list.append(int(user_input))
    

print("Final list:", list)
