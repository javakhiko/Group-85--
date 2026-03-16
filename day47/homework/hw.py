# #   codewars 1
# def get_middle(s):
#     n = len(s)
#     if n % 2 == 0:
#         return s[n//2-1] + s[n//2]
#     else:
#         return s[n//2]    

# #   codewars 2
# def is_anagram(test, original):
#     test = test.lower()
#     original = original.lower()
#     if len(test) != len(original):
#         return False
#     for i in test:
#         if test.count(i) != original.count(i):
#             return False

#     return True
    
#   codewars 3
# def maskify(cc):
#   if len(cc) <= 4:
#       return cc
#   return "#" * (len(cc) - 4) + cc[-4:]  

#  codewars 4
# def check_exam(arr1,arr2):
#     score = 0
    
#     for i in range(len(arr1)):
#         if arr2[i] == "":
#             score += 0
#         elif arr2[i] == arr1[i]:
#             score += 4
#         else:
#             score -= 1

#     if score < 0:
#         return 0
    
#     return score
  

# codewars 5
