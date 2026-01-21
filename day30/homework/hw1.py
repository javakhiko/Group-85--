# 1) შექმენით სახელებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა და პირველი ასო არის d, მაშინ ახალ სიაში ჩაამატეთ სახელი "NIKA", თუ სიტყვის ყველა ასო არის დიდი ან იწყება ასო K-თი, მაშინ სიაში ჩაამატეთ სახელი "GOGA", სხვა შემთხვევაში სიაში ჩაამატეთ სიტყვა "ლიდერი". დაპრინტეთ მიღებული სია.

names = ["dato", "DATO", "kaxa", "Keti", "nika", "DAVIT", "giorgi"]

new_list = []

for name in names:
    if name == name.lower() and name[0] == "d":
        new_list.append("NIKA")
    elif name == name.upper() or name[0] == "K":
        new_list.append("GOGA")
    else:
        new_list.append("ლიდერი")

print(new_list)