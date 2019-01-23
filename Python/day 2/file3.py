myfile=open("sample.txt")
content=myfile.read()
print(content)
myfile.close()
content=content.splitlines()
for i in content:
    print(len(i))