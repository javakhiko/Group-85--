# 4) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ წინადადების სტრინგი. დათვალე, რამდენი სიტყვის სიგრძე არის 4-ზე მეტი. დაპრინტე ასეთი სიტყვების რაოდენობა. დაწერეთ ეს დავალება ორნაირად - split() ფუნქციით და split() ფუნქციის გარეშე.
def count_long_words_split():
    sentence = input("Enter Sentence: ")
    words = sentence.split()
    count = 0

    for word in words:
        if len(word) > 4:
            count += 1

    print(count)

count_long_words_split()