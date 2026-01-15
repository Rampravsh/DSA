class CircularNode:
    def __init__(self,data):
        self.data=data
        self.next=None
    
a=CircularNode(1)
b=CircularNode(2)
c=CircularNode(3)

a.next=b
b.next=c
c.next=a

head = a