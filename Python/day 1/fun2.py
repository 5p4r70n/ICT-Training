def printme(a,b):
    c=a*b
    c1=a+b
    c2=a-b 
    return(c,c1,c2)
x=int(input("enter 1st elemet   "))
y=int(input("enter 2nd element  "))
z=printme(x,y)
print("outside...",z)
print(type(z))
