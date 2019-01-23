username = input("enter the user Name")
Password = input("enter the password")
fileobj = open("login.txt","r")
uname=fileobj.readline()
Pass = fileobj.readline()
print(username)
print(Password)
print(uname)
print(Pass)
uname=uname.rstrip("\n")
if username== uname and Password==Pass :
    print("login success")
else:
    print("Wrong Pass")