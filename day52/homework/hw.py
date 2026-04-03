# code wars 1
# def solution(number):
    # sum = 0
    # if number < 0:
        # return 0
    # for i in range(1,number):
        # if i % 3 == 0 or i % 5 == 0:
            # sum += i
    # return sum

# code wars 2
# def check_exam(arr1,arr2):
#     score = 0
    
#     for i in range(len(arr1)):  
#         if arr2[i] == "":
#             score = score + 0
#         elif arr2[i] == arr1[i]:
#             score = score + 4
#         else:
#             score = score - 1
#     if score < 0:
#         return 0
#     else:
#         return score

# code wars 3
# def high_and_low(numbers):
#     num_list = numbers.split()
#     lowest = int(num_list[0])
#     highest = int(num_list[0])
#     for i in range(len(num_list)):
#         if int(num_list[i]) < lowest:
#             lowest = int(num_list[i])
#         if int(num_list[i]) > highest:
#             highest = int(num_list[i])
#     return str(highest) + " " + str(lowest)

# code wars 4
# def find_short(s):
    # words = s.split()
    # shortest = words[0]
    # for i in range(len(words)):
        # if len(words[i]) < len(shortest):
            # shortest = words[i]
    # return len(shortest)
    
# code wars 5
# def remove(s):
    # new = ""
    # count = 0
# 
    # i = len(s) - 1
    # while i >= 0 and s[i] == '!':
        # count += 1
        # i -= 1
# 
    # for ch in s:
        # if ch != '!':
            # new += ch
            # 
    # for g in range(count):
        # new += '!'
# 
    # return new
    
# code wars 7
# def points(games):
#     total = 0
#     for i in games:
#         if i[0] > i[2]:
#             total = total + 3
#         elif i[0] == i[2]:
#             total = total + 1
#         else:
#             total = total + 0
#     return total

# code wars 8
# def calculator(txt):
    # spl = txt.split()
    # first = spl[0]
    # operator = spl[1]
    # second = spl[2]
    # 
    # a = len(first)
    # b = len(second)
    # 
    # if operator == '+':
        # result = a + b
    # elif operator == '-':
        # result = a - b
    # elif operator == '*':
        # result = a * b
    # else:
        # result = a // b