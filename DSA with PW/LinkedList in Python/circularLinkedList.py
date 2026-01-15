class CircularNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, data):
        """Appends a node to the end of the circular linked list."""
        new_node = CircularNode(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            new_node.next = self.head
        else:
            self.tail.next = new_node
            self.tail = new_node
            self.tail.next = self.head

    def prepend(self, data):
        """Prepends a node to the beginning of the circular linked list."""
        new_node = CircularNode(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            new_node.next = self.head
        else:
            new_node.next = self.head
            self.head = new_node
            self.tail.next = self.head

    def delete(self, key):
        """Deletes a node with the given key from the circular linked list."""
        if not self.head:
            return

        # Case 1: Deleting the head node
        if self.head.data == key:
            if self.head == self.tail: # Only one node in the list
                self.head = None
                self.tail = None
            else:
                self.head = self.head.next
                self.tail.next = self.head
            return

        # Case 2: Deleting a node other than the head
        current = self.head
        prev = None
        while True:
            if current.data == key:
                if current == self.tail:
                    self.tail = prev
                prev.next = current.next
                return
            prev = current
            current = current.next
            if current == self.head:
                break # Key not found

    def display(self):
        """Displays the nodes in the circular linked list."""
        if not self.head:
            print("Circular Linked List is empty.")
            return
        current = self.head
        while True:
            print(current.data, end=" -> ")
            current = current.next
            if current == self.head:
                break
        print(" (Head)")

# --- Examples ---

# 1. Create a new circular linked list
cll = CircularLinkedList()

# 2. Append nodes
print("Appending 1, 2, 3:")
cll.append(1)
cll.append(2)
cll.append(3)
cll.display()

# 3. Prepend a node
print("\nPrepending 0:")
cll.prepend(0)
cll.display()

# 4. Delete a node
print("\nDeleting node with value 2:")
cll.delete(2)
cll.display()

# 5. Delete the head node
print("\nDeleting head node (value 0):")
cll.delete(0)
cll.display()

# 6. Delete the tail node
print("\nDeleting tail node (value 3):")
cll.delete(3)
cll.display()

# 7. Delete the only remaining node
print("\nDeleting the only node (value 1):")
cll.delete(1)
cll.display()