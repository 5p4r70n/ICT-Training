myfile=open("sample.txt")
print(myfile.read())
print('#### Second ####')
print(myfile.read()) #this wont read becose when we read a file first time the curser will read it and stay at the end so the next print wont work becose there is nothing to print we can also overcome this via moving value to the variable
myfile.seek(0) #so we here use "seek"operation , this will retrun the curser to the 1st position
print(myfile.read())

