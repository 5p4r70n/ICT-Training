class vehicle:
    type="sedan"
    yom=2016
    milage=17
class bus(vehicle): #its first priority is inside this class 2nd is the inner class eg:vehicle
    type="coach"
    milage=8
mybus=bus()
print(mybus.type,mybus.yom,mybus.milage) 
