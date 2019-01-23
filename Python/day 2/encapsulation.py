class employee:
    name="akshay"
    age=28
    basicpay=210000
    hra=8000
    da=60/100*basicpay
    def calculatesalary(self):
            return self.basicpay+ self.hra +self.da
myemployee = employee()
print("monthly salary of",myemployee.name, "is" , myemployee.calculatesalary())