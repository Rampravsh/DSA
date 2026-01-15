# Linked Lists in Python

This directory contains Python implementations of three fundamental types of linked lists:
- Singly Linked List
- Doubly Linked List
- Circular Linked List

## What is a Linked List?

A linked list is a linear data structure, but unlike arrays, it is not stored in contiguous memory locations. It consists of a sequence of nodes, where each node contains:
-   **Data**: The value stored in the node.
-   **A pointer (or reference)**: A link to the next node in the sequence.

The first node in the list is called the **head**, and the last node's pointer typically points to `None` (or `null`), indicating the end of the list.

## 1. Singly Linked List

A singly linked list is the simplest type of linked list. Each node has only one pointer, which points to the next node in the sequence. Traversal is unidirectional, meaning you can only move from the head to the tail.

### File: `singlelinkedlist.py`

This file provides a basic implementation of a singly linked list with the following operations:
-   **Node Creation**: Defines the `Node` class.
-   **Traversal**: The `printLinkedList` function iterates through the list and prints the data of each node.
-   **Insertion**:
    -   At the beginning of the list.
    -   At the end of the list.
    -   At a specific position `k`.
-   **Deletion**:
    -   The first node.
    -   The last node.
    -   The node at a specific position `k`.

### Example from `singlelinkedlist.py`:

```python
class Node:
    def __init__(self,data):
        self.data = data
        self.next =None

# Create nodes
a = Node(5)
b = Node(6)
c = Node(7)

# Link nodes
a.next = b
b.next = c

head = a

# Traverse and print
def printLinkedList(head):
    curr = head
    while curr is not None:
        print(curr.data, end=' ')
        curr = curr.next

printLinkedList(head)  # Output: 5 6 7
```

---

## 2. Doubly Linked List

A doubly linked list has nodes that contain three fields:
-   **Data**
-   **A pointer to the next node** (`next`)
-   **A pointer to the previous node** (`prev`)

This bidirectional linkage allows for traversal in both forward and backward directions.

### File: `doublyLinkedList.py`

This file implements a `DoublyLinkedList` class with the following methods:
-   **`append(data)`**: Adds a new node to the end of the list.
-   **`prepend(data)`**: Adds a new node to the beginning of the list.
-   **`delete(key)`**: Deletes the node with the specified data value.
-   **`print_list()`**: Prints the list from head to tail.
-   **`print_list_reverse()`**: Prints the list from tail to head.

### Example from `doublyLinkedList.py`:

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    # ... (implementation) ...

# Usage
dll = DoublyLinkedList()
dll.append(10)
dll.append(20)
dll.prepend(5)

dll.print_list()  # Output: 5 <-> 10 <-> 20
dll.print_list_reverse() # Output: 20 <-> 10 <-> 5
```

---

## 3. Circular Linked List

In a circular linked list, the `next` pointer of the last node points back to the `head` node instead of `None`. This forms a circular chain. It can be either singly or doubly linked. The implementation here is a singly circular linked list.

The main advantage is that you can traverse the entire list starting from any node.

### File: `circularLinkedList.py`

This file provides a `CircularLinkedList` class with these methods:
-   **`append(data)`**: Adds a node to the end of the circular list.
-   **`prepend(data)`**: Adds a node to the beginning of the circular list.
-   **`delete(key)`**: Deletes a node with the given key.
-   **`display()`**: Traverses and displays the list's elements.

### Example from `circularLinkedList.py`:

```python
class CircularNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    # ... (implementation) ...

# Usage
cll = CircularLinkedList()
cll.append(1)
cll.append(2)
cll.append(3)

cll.display()  # Output: 1 -> 2 -> 3 -> (Head)
```

## Summary of Differences

| Feature             | Singly Linked List         | Doubly Linked List              | Circular Linked List         |
| ------------------- | -------------------------- | ------------------------------- | ---------------------------- |
| **Node Structure**  | `data`, `next`             | `data`, `next`, `prev`          | `data`, `next`               |
| **Traversal**       | Unidirectional (Forward)   | Bidirectional (Forward/Backward)| Unidirectional (Circular)    |
| **Last Node `next`**| Points to `None`           | Points to `None`                | Points to `head`             |
| **Complexity**      | Simpler implementation     | More complex, more memory usage | Moderate complexity          |
| **Use Case**        | Basic scenarios, stacks, queues. | When backward traversal is needed. | Round-robin scheduling, etc. |
