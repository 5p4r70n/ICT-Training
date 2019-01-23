import matplotlib.pyplot as plt  #install tha pandas library thecn check
x1=[1,2,3]
y1=[2,4,1]
plt.plot(x1,y1,label="line 1" )

#line 2 
x2=[1,2,3]
y2=[2,4,1]
plt.plot(x2,y2,label="line 1" )

plt.xlabel('x-axis')
plt.ylabel('y-axis')

plt.title('my first plot')
plt.legend()
plt.show()