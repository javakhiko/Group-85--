# 6) შექმენით ფუნქცია. მომხმარებელს შემოატანინე წინადადება. იპოვე და დაბეჭდე ყველაზე გრძელი სიტყვა ამ წინადადებაში. გამოიყენეთ while ციკლი. გამოიძახეთ ფუნქცია.
def longest_word():
    sentence = input("Enter Sentence: ")
    words = sentence.split()
    i = 0
    longest = words[0]

    while i < len(words):
        if len(words[i]) > len(longest):
            longest = words[i]
        i += 1

    print( longest)

longest_word()