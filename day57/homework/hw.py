#   codewars 1

# def create_phone_number(n):
#     return "(" + str(n[0]) + str(n[1]) + str(n[2]) + ") " +  str(n[3]) + str(n[4]) + str(n[5]) + "-" + str(n[6]) + str(n[7]) + str(n[8]) + str(n[9])

#   codewars 2

# def maxTriSum(numbers):
#     first = second = third = numbers[0]

#     for num in numbers:
#         if num == first or num == second or num == third:
#             continue

#         if num > first:
#             third = second
#             second = first
#             first = num
#         elif num > second or second == first:
#             third = second
#             second = num
#         elif num > third or third == second:
#             third = num

#     return first + second + third

#   codewars 3

