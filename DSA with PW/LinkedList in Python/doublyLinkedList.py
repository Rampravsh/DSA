class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def append(self, data):
        """Add a new node to the end of the list."""
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
            new_node.prev = current

    def prepend(self, data):
        """Add a new node to the beginning of the list."""
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    def delete(self, key):
        """Delete a node with the given key."""
        current = self.head
        # Find the node to delete
        while current and current.data != key:
            current = current.next

        if current is None:
            print(f"Node with data {key} not found.")
            return

        # If the node to be deleted is not the head node
        if current.prev:
            current.prev.next = current.next
        else: # Node to be deleted is head
            self.head = current.next

        # If the node to be deleted is not the last node
        if current.next:
            current.next.prev = current.prev

    def print_list(self):
        """Print the list from head to tail."""
        if self.is_empty():
            print("List is empty.")
            return
        current = self.head
        nodes = []
        while current:
            nodes.append(str(current.data))
            current = current.next
        print(" <-> ".join(nodes))

    def print_list_reverse(self):
        """Print the list from tail to head."""
        if self.is_empty():
            print("List is empty.")
            return
        # Go to the last node
        current = self.head
        while current.next:
            current = current.next

        # Traverse backwards
        nodes = []
        while current:
            nodes.append(str(current.data))
            current = current.prev
        print(" <-> ".join(nodes))


# --- Example Usage ---
dll = DoublyLinkedList()
print(f"Is the list empty? {dll.is_empty()}")

# Append nodes
dll.append(10)
dll.append(20)
dll.append(30)
print("\nList after appending 10, 20, 30:")
dll.print_list()

# Prepend a node
dll.prepend(5)
print("\nList after prepending 5:")
dll.print_list()
print(f"Is the list empty? {dll.is_empty()}")


# Print in reverse
print("\nList in reverse order:")
dll.print_list_reverse()

# Delete a node
dll.delete(20)
print("\nList after deleting 20:")
dll.print_list()

dll.delete(5)
print("\nList after deleting 5 (the head):")
dll.print_list()

dll.delete(30)
print("\nList after deleting 30 (the tail):")
dll.print_list()
dll.print_list_reverse()