#   codewars 1

# def disemvowel(string_):
#     vowels = "aeiouAEIOU"
#     result=""
#     for i in string_:
#         if i not in vowels:
#             result+=i
#     return result

#   codewars 2

# def square_digits(num):
#     result = ''
#     for i in str(num):
#         result += str(int(i)**2)
        
#     return int(result)

#   codewars 3

# def filter_list(l):
#     result = []
#     for i in l:
#         if type(i) == int:
#             if i>=0:
#                 result.append(i)
#     return result

#   codewars 4

# def descending_order(num):
#     example = list(str(num))
#     result = ''
#     while example:
#         max = example[0]
#         for i in example:
#             if i > max:
#                 max = i
#         result += max
#         example.remove(max)
#     return int(result)

#   codewars 5

# def is_square(n):
#     if n < 0:
#         return False
    
#     root = int(n ** 0.5)
#     return root * root == n