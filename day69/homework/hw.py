#   codewars 1
# def spacey(ar):
#     current = ""
#     result = []
    
#     for i in ar:
#         current += i
#         result.append(current)
        
#     return result

#   codewars 2
# def cube_odd(arr):
#     total = 0

#     for x in arr:
#         if type(x) not in (int, float):
#             return None
#         if type(x) is bool:
#             return None

#         if x % 2 != 0:
#             total += x ** 3

#     return total
                
#   codewars 3
# def solve(s):
#     count_u=0
#     count_l=0
#     count_n=0
#     count_spec=0
#     for i in s:
#         if i.isupper():
#             count_u+=1
#         elif i.islower():
#             count_l+=1
#         elif i.isdigit():
#             count_n+=1
#         else:
#              count_spec+=1
#     return [count_u, count_l, count_n, count_spec]

#  codewars 4
# class List:
#     def remove_(self, integer_list, values_list):
#         result = []
#         for x in integer_list:
#             if x not in values_list:
#                 result.append(x)
#         return result

#   codewars 5
# def solution(value):
#     value = str(value)
#     return "Value is " + "0" * (5 - len(value)) + value

#   codewars 6
# ?

#   codewars 7
# def last_survivor(letters, coords):
#     letters = list(letters)
    
#     for i in coords:
#         letters.pop(i)
        
#     return letters[0]

#   codewars 8
# def solve(s):
#     vowels = vowels=['a','e','i','o','u']
#     count = 0
#     max_count = 0

#     for i in s:
#         if i in vowels:
#             count += 1
#             if count > max_count:
#                 max_count = count
#         else:
#             count = 0

#     return max_count

#   codewars 9
# def password(st):
#     if len(st) < 8:
#         return False

#     has_upper = False
#     has_lower = False
#     has_digit = False

#     for ch in st:
#         if ch.isupper():
#             has_upper = True
#         elif ch.islower():
#             has_lower = True
#         elif ch.isdigit():
#             has_digit = True

#     return has_upper and has_lower and has_digit

#   codewars 10
