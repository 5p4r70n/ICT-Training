class Person:
    def __init__(self,name,age,cgpa):
        self.name=name
        self.age=age
        self.cgpa=cgpa
student = Person("ajay",23,7.7)
print(student.name,student.age,student.cgpa) 