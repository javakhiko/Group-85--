# 7) შექმენი ფუქნცია რომელიც მომხმარებელს შემოაყვანინებს რაღაც რიცხვს და დააბრუნებს სიტყვას ეს რიცხვი დადებითია უარყოფითია თუ ნულია

def fun():
    num=int(input('Enter Num: '))
    if num<0:
        print('Num is Negative')
    elif num>0:
        print('Num Is Positive')
    else:
        print('Num Equals To Zero')
fun()
