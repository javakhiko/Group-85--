
names= ['giorgi', 'mevludi', 'Kaxa','Levani']
new_list=[]
for i in names:
    if names.index(i) %2==0 and i==i.capitalize():
        new_list.append(i)

print(new_list)
