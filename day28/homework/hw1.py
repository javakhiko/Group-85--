# 1) მომხმარებელს შემოაყვანინე წინადადება. დაბეჭდე თითოეული სიტყვა ცალ–ცალკე for loop-ის გამოყენებით. 
# თითოეული სიტყვა დაბეჭდე capitalize()-ით.

sentence = input("Enter Sentance: ")

words = sentence.split()

for word in words:
    print(word.capitalize())
