# stack implementation using list
class Stack:
    def __init__(self, max_size=None):
        self.items = []
        self.max_size = max_size

    def is_full(self):
        return len(self.items) == self.max_size
    
    def is_empty(self):
        return len(self.items) == 0

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        else:
            raise IndexError("pop from empty stack")

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            raise IndexError("peek from empty stack")

    def size(self):
        return len(self.items)

    def display(self):
        return self.items


stack=Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(5)
stack.push(6)
stack.push(4)
print(stack.display())

stack.pop()
print(stack.display())