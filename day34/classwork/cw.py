def newlist():
    names=['mevludi','Avto','Durmishxani','emzari','Nana']
    empty=[]
    for i in names:
        if i==i.capitalize():
            empty.append(i.lower())
        else:
            empty.append(i.upper())
    print(empty)

newlist()
