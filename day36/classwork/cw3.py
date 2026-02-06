# 3) შექმენით ფუნცქცია სახელად sum_numbers რომელიც პარამეტრად მიიღებს რიცხვების სიას [10, 20,30, 100, 200, 500 ] დაწერე ფუნქცია რომელიც დააბრუნებს მოცემული რიცხვების ჯამს

def sum_numbers(numbers):
    sum = 0
    for i in numbers:
        sum += i
    return sum

numbers = [10, 20, 30, 100, 200, 500]
result = sum_numbers(numbers)
    