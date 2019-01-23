class car:
    model = "sedan"
    def __init__(self,model,color):
        self.model=model
        self.color=color
##x=str (input("What is your Car...") 
mycar1 = car("Toyota","green")
mycar2 = car("Honda","blue")
mycar3 = car("Ford","Red")
print(mycar1.model,mycar1.color)
print(mycar2.model,mycar2.color)
print(mycar3.model,mycar3.color)