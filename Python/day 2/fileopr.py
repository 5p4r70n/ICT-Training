fileobj=open("login.txt","w") #open in write mode if there is no file python will create..
fileobj.write("ictak\n") #/n is enter
fileobj.close()
fileobj=open("login.txt","a") #in apend mode "A" this will werite il last of that file here next to the ictak text
fileobj.write("1234")

