#cw 1 მომხმარებელს შემოატანინეთ რიცხვი და გაარკვიეთ დადებითი არის თუ არა(if,else).


number=int(input("Enter Your Age:"))
if number>0:
    print("Number Is Positive")
elif number==0:
    print("Number Equals To Zero")
else:
    print("Number Is Negative")

#hw მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ მომხმარებლის შემოტანილი რიცხვი 10 - ს უდრის თუ არა, თუ უდრის 10 - ს მაშინ დაბეჭდეთ, რომ  ‘რიცხვი არის 10 ის ტოლი’, თუ არ უდრის მაშინ ‘რიცხვი არ არის 10 ის ტოლი

number0=int(input ("Enter random number:"))
if number0==10:
    print("Number Equals To", 10)
else:
    print("Number Doesnt Equal To", number0)

#hw 3 დაწერეთ მოსწავლის ჩაჭრის თუ ჩაბარების პროგრამა. 
# Შემოატანინეთ მომხმარებელს თავის ქულა და თუ 81 ის ტოლი ან მასე მეტია დაიბეჭდოს რომ მან ჩააბარა და თუ ნაკლებია 81 ზე მაშინ ჩაიჭრა. 

points=int(input("Enter Your Exam Score Point:"))
if points>=81:
    print("You Passed The Exam")
else:
    print("You Failed :(")

#hw 4  შეამოწმე, რომ ორივე დადებითია (ანუ ორივე მეტია 0-ზე).  თუ ასეა დაბეჭდე "ორივე პირობა სწორია", წინააღმდეგ შემთხვევაში  "პირობა არასწორია". 


number1=int(input("Enter Number:"))
number2=int(input("Enter Number:"))
if number1>0 and number2>0:
    print("orive piroba sworia")
else:
    print("piroba arasworia")

#hw 5 მოცემულია ორი რიცხვი a და b.  თუ  ერთ-ერთი მაინც  მეტია 5-ზე, დაბეჭდე "ერთ-ერთი პირობა მაინც სწორია",
#  წინააღმდეგ შემთხვევაში — "არც ერთი პირობა არ შესრულდა


a=int(input("Enter What A Equals To:"))
b=int(input("Enter What B Equals To:"))
if a>5 or b>5:
    print("One Of Them Is Correct")
else:
    print("arcerti piroba sworia")





