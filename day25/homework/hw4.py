# 4) შექმენი list: colors = ["red", "blue", "green", "yellow"] მომხმარებელს შეაყვანინე ფერი, თუ არსებობს 
# დაბეჭდე მისი index(), თუ არა  დაბეჭდე "Not found"

colors = ["red", "blue", "green", "yellow"]
color=input('Enter Color To See if it exists in the list: ')
if color in colors:
    index=colors.index(color)
    print('Your Color Is on', index , 'index')
else:
    print('Color Not Found In The List')
