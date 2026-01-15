class DoublyNode:
    def __init__(self,data):
        self.data=data
        self.next=None
        self.prev=None


a=DoublyNode(1)
b=DoublyNode(2)
c=DoublyNode(3)

a.next=b
b.next=c
b.prev=a
c.prev=b

head=a

