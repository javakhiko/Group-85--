#   codewars 1 

# def no_space(x):
#     x_no_space = ""
#     for i in range(len(x)):
#         if x[i] != " ":
#             x_no_space = x_no_space + x[i]
#     return x_no_space

#   codewars 2

# def count_sheeps(sheep):
#     count=0
#     for i in sheep:
#         if i==True:
#             count+=1
#     return count

# codewars 3

# def summation(num):
#     sum = 0
#     for i in range(1,num+1):
#         sum += i
#     return sum

# codewars 4

# def twice_as_old(d,s):
#     age = d - s*2
#     if age <0:
#         return -age
#     else:
#         return age

# codewars 5

# def number(bus_stops):
#     get_on = 0
#     get_off = 0
#     for i in bus_stops:
#         get_on += i[0]
#         get_off += i[-1]
#     return get_on - get_off