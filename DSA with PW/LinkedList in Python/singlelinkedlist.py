class Node:
    def __init__(self,data):
        self.data = data
        self.next =None

a = Node(5)
b = Node(6)
c = Node(7)
a.next=b
b.next=c
# print(a.data)
# print(a.next.data)
head=a
# print(head.data)
# print(head.next.data)
# print(head.next.next.data)

#traverse linked list 
def printLinkedList(head):
    curr = head
    while curr!=None:
        print(curr.data, end=' ')
        curr = curr.next

# printLinkedList(head)

#insertion at the beginning

newNode =Node(4)
newNode.next=head
head = newNode

# printLinkedList(head)

#insertion at the end

newNode=Node(8)

curr=head
while curr.next!=None:
    curr=curr.next

curr.next=newNode

# printLinkedList(head)

#insertion at given position
k=2
newNode=Node("5a")
curr=head
for i in range(k-1):
    curr=curr.next

newNode.next=curr.next
curr.next=newNode

# printLinkedList(head)

#deletion the first node

head=head.next

# printLinkedList(head)

#deletion the last node

curr=head
while curr.next.next!=None:
    curr=curr.next

curr.next=None

# printLinkedList(head)

#delete the kth node 

k=1
curr=head
for i in range(k-1):
    curr=curr.next

curr.next = curr.next.next

# printLinkedList(head)


