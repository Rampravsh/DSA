class Node:
    def __init__(self,data=0,next=None):
        self.data=data
        self.next=next

class Stack:
    def __init__(self):
        self.top=Node()
        self.length=0

    def push(self,x):
        self.length+=1
        if self.top is None:
            top =Node(x)
        else:
            newNode=Node(x)
            newNode.next=self.top
            self.top=newNode
    def pop(self):
        if self.top is None:
            return -1
        else:
            self.length-=1
            x=self.top.data
            self.top=self.top.next
            return x

    def top(self):
        if self.top==None:
            return -1
        return self.top
    def size(self):
        return self.length
    

stack=Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

print(stack.size())