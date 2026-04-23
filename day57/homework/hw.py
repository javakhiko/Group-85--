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

# ?
#   codewars 4
# def to_float_array(arr): 
#     result = []
    
#     for i in arr:
#         if '.' in i:
#             result.append(float(i))
#         else:
#             result.append(int(i))
    
#     return result

#   codewars 5

# def capitalize(s):
#     even = ""
#     odd = ""
    
#     for i in range(len(s)):
#         if i % 2 == 0:
#             even += s[i].upper()
#             odd += s[i]
#         else:
#             even += s[i]
#             odd += s[i].upper()
    
#     return [even, odd]

#   codewars 6

# def adjacent_element_product(array):
#     max = array[0] * array[1]
    
#     for i in range(len(array) - 1):
#         current = array[i] * array[i + 1]
#         if current > max:
#             max = current
    
#     return max

#   codewars 7

# def show_sequence(n):
#     if n < 0:
#         return str(n) + "<0"
#     elif n==0:
#         return str(n) + '=0'
    
#     s = 0
#     result = ""
    
#     for i in range(n + 1):
#         s += i
#         result += str(i)
#         if i < n:
#             result += "+"
    
#     return result + " = " + str(s)    
# 
# # codewars 8
# 
#   codewars 9
# 
#   codewars 10
#   