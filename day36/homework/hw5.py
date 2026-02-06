# 5) შექმენი ფუქნცია რომელიც იღებს რიცხვების სიას და აბრუნებს მათ საშუალოს

def fun(nums):
    sum = 0

    for num in nums:
        sum += num

    return sum / len(nums)

print(fun([10, 20, 30, 40, 50]))