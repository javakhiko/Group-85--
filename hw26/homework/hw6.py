# 6) მომხმარებელს შემოაყვანინე რიცხვები, შექმენი ორი სია დადებითი და უარყოფითი სიებისთვის,
#  დადებითი რიცხვები დაამატე დადებითი რიცხვებისთვის განკუთვნილ სიაში, უარყოფითი რიცხვები კი პირიქით

list_positive=[]
list_negative=[]

while True:
    user_input = int(input("Enter number (type 0 to finish): "))
    
    if user_input== 0:
        break
    elif int(user_input)>0:
        list_positive.append(int(user_input))
    elif int(user_input)<0:
        list_negative.append(int(user_input))
    

print(list_negative, list_positive)