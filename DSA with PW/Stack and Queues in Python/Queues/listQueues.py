class Queue:
    def __init__(self):
        self.q = []
        self.front=-1
    
    def is_empty(self):
        return len(self.items) == 0

    def push(self, item):
        if self.front==-1:
            self.front=0
        self.q.append(item)

    def pop(self):
        if len(self.q) == 0:
            return -1
        x=self.q[self.front]
        self.front+=1
        if self.front==len(self.q):
            self.front=-1
            self.q=[]
        return x
    
    def getFront(self):
        if len(self.q)==0:
            return -1
        return self.q[self.front]
    
    def size(self):
        if self.front == -1:
            return 0
        return len(self.q)-self.front
    


queue=Queue()

queue.push(5)
queue.push(6)
queue.push(7)
queue.push(8)
queue.push(9)

print(queue.getFront())

print(queue.pop())
print(queue.getFront())
print(queue.size())