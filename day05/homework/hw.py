# დაწერეთ კოდი, სადაც მომხმარებელს მოთხოვთ ინფორმაციას მათ შესახებ: სახელი, გვარი,
#  ასაკი, შემდეგ ეს ინფორმაცია გამოიტანეთ როგორც რამე დოკუმენტი, მაგალითად პასპორტი (თითქოს მთავრობის პროგრამაა)

name=input("Enter Your Name:")
surname=input("Enter Your Surname:")
age=int(input("Enter Your Age:"))
birth=int(input("Enter Your Date Of Birth:"))

#now lets print everything

print("========================")
print("========Passport========")
print("=                      =")
print("= Name:" , name,      "=") 
print("= Surname:",surname,  "=") 
print("= Age:" , age,        "=") 
print("= Birth:",birth,      "=") 
print("=Passport Is Valid For 6 Years=")
print("========================")