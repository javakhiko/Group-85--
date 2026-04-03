#   codewars 1
# def maskify(cc):
#     if len(cc) <= 4:
#         return cc
#     return "#" * (len(cc) - 4) + cc[-4:]

#   codewars 2
# def no_boring_zeros(n):
#     if n == 0:
#         return 0

#     s = str(n)
#     s = s.rstrip('0')
#     result = int(s)

#     return result

#   codewars 3
# def number(lines):
#     result = []
    
#     for i in range(len(lines)):
#         line = str(i + 1) + ": " + lines[i]
#         result.append(line)
    
#     return result

#   codewars 4
# def distinct(seq):
#     result = []
    
#     for num in seq:
#         if num not in result:
#             result.append(num)
    
#     return result

#   codewars 5
# def human_years_cat_years_dog_years(humanYears):
#     if humanYears == 1:
#         return [1, 15, 15]
#     elif humanYears == 2:
#         return [2, 24, 24]
#     else:
#         catYears = 24 + (humanYears - 2) * 4
#         dogYears = 24 + (humanYears - 2) * 5
#         return [humanYears, catYears, dogYears]

#   codewars 6
