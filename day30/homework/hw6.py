# 6) შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 5-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.

words='Magar','Dimpitauri','damitauuuuri','ertierti'
i=0
while i<len(words):
    if len(words[i])>5 or words[i].index()%2!=0:
         words.remove(words[i])
    else:
         i=i+1
print(words)
