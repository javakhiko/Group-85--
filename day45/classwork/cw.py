# codewars 1 

# def count_positives_sum_negatives(arr):
#     if arr == []:
#         return arr
#     empty = []
#     count = 0
#     n_count = 0
#     for i in arr:
#         if i > 0:
#             count += 1
#         elif i < 0:
#             n_count += i
#     
#     return [count , n_count]

# codewars 2
# def count_sheep(n):
#     word = ''
#     for i in range(1,n+1):
#         word = word + str(i) + ' ' + 'sheep...'
#     return word

# codewars 3

# def move_zeros(lst):
#     for i in lst:
#         if i ==0:
#             lst.remove(i)
#             lst.append(0)
#     return lst

# codewars 4

# def likes(name):
#     if len(name) == 0:
#         return "no one likes this"
#     elif len(name) == 1:
#         return name[0] +" likes this"
#     elif len(name) == 2:
#         return name[0] + " and " + name[1] + " like this"
#     elif len(name) == 3:
#         return name[0] +", " + name[1] + " and " + name[2] +" like this"
#     else:
#         return name[0] +", " + name[1] + " and " + str(len(name)-2) + " others like this"

# codewars 5

# def friend(x):
#     new=[]
#     for i in x:
#         if len(i)==4:
#             new.append(i)
#     return new
