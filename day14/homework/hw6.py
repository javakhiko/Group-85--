user_input=input('Enter Content:')
i=user_input
while user_input==int:
    user_input=input('Enter Content:')
    if user_input=='გამოთვალე საშუალო':
        print(user_input% i)