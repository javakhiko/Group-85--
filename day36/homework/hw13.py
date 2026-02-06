# 13) დაწერეთ ფუნქცია, სახელად calculateArea, რომელიც არგუმენტად მიიღებს ოთხკუთხედის სიგრესა და სიგანეს და დააბრუნებს მის ფართობს. შედეგი გამოიტანეთ ტერმინალში.

def calculateArea():
    length=int(input('Enter Length Of Square: '))
    width=int(input('Enter Width Of Square: '))
    return length*width

print(calculateArea())