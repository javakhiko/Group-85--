# 1) შექმენი ცარიელი სია.მომხმარებელმა შეიყვანოს რიცხვები მანამ, სანამ არ დაწერს "stop".
# დაამატე მხოლოდ დადებითი რიცხვები სიაში, უარყოფითი რიცხვები არ დაამატო, ბოლოს დაბეჭდე სია

list=[]
while True:
    user_input = input("Enter number (type 'stop' to finish): ")

    if type(user_input)==int:
        if user_input>0:
            list.append(int(user_input))

    if user_input== "stop":
        break
    
    list.append(int(user_input))
    

print("Final list:", list)
