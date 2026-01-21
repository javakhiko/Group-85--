# 5)შექმენი სია სადაც შეიყვანთ როგორდც დადებით ასევე უარყოფით რიცხვებს,შენი დავალებაა გაიგო სიაშ მყოფი დადებით რიცხვების ჯამი და უარყოფით რიცხვების რაოდენობა

nums = [10, -5, 20, -3, 7, -12, 4]

positive_sum = 0
negative_count = 0

for num in nums:
    if num > 0:
        positive_sum += num
    elif num < 0:
        negative_count += 1

print(positive_sum)
print(negative_count)