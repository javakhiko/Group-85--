# 4) შექმენი ფუნქცია რომელიც მიიღებს სიტყვების სიას და დააბრუნებს მხოლოდ იმ სიტყვებს რომლებიც იწყება დიდი ასოთი

def fun(words):
    result = []

    for word in words:
        if word[0] == word[0].upper():
            result.append(word)

    return result
print(fun(["hello", "World", "python", "Code", "test", "DATA", "ok"]))

