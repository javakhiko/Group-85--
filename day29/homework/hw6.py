# 6)მომხმარებელს შემოატანინე რაიმე სტრინგი,შენი დავალებაა დაითვალო თუ რამდენი ცალი ხმოვანი და რამდენი ცალი თანხმოვანი გვხვდება მის მიერ შემოყვანილ სტრინგში

text = input("enter text: ").lower()
xmovnebi = "aeiou"
xmovani_count = 0
tanxmovani_count = 0

for i in text:
    if i in xmovnebi:
        xmovani_count += 1
    else:
        tanxmovani_count += 1

print(xmovani_count )
print(tanxmovani_count)