# 9)შექმენით კალკულატორი როგორიც ჩვენ გავაკეთეთ,
# დაუმატეთ სხვა მათემატიკური ოპერატორები,ასევე დაუმატეთ შედარების ოპერატორებიც

print("########## CALCULATOR ##########")

while True:
    num1 = float(input('Enter First Number: '))
    operator = input('Enter Operator (+,-,/,*). (type "exit" to quit): ')
    
    if operator== "exit":
        print("Calculator Closed.")
        break

    num2 = float(input('Enter Second Number: '))

    if operator == '+':
        print('Result:', num1 + num2)
    elif operator == '-':
        print('Result:', num1 - num2)
    elif operator == '/':
        print('Result:', num1 / num2)
    elif operator == '*':
        print('Result:', num1 * num2)
    else:
        print('The operator you typed isnt the correct operator')
