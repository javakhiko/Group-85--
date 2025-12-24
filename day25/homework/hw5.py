# 5) შექმენი ნებისმიერი list 5 ელემენტით, მომხმარებელს ჰკითხე: გინდა list-ის გასუფთავება? (yes/no),
#  თუ პასუხი "yes"  გამოიყენე clear(), ბოლოს დაბეჭდე list
list=['ele' , 5 , 12,12321]
print('List is', list)
print('Do You Want To Clear The list?')
answer=input('yes/no : ')
if answer=='yes':
    list.clear
    print('list is cleared')
elif answer=='no':
    print('list remains: ', list)
else:
    print('keyword you typed isnt correct answer, GET OUT!')