# 5)ტერმინალში გამკოიუტანეთ ყველა ლუწი რიცხვის ჯამი გამოიყენეთ ინდექსინგი

data = [10, 23, 35, 42, 58, 61]
result = 0

for i in range(6):
    if data[i] % 2 == 0:
        result += data[i]

print(result)
