const readline = require("readline");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    // Function to append data to the list
    const newNode = new Node(data); // Creates a new node
    if (!this.head) {
      // Checks if the list is empty
      this.head = newNode;
      return;
    }
    let current = this.head; // Sets the current node to the head
    while (current.next) {
      current = current.next;
    }
    current.next = newNode; // Inserts the new node at the end of the list
  }

  prepend(data) {
    // Function to prepend data to the list
    const newNode = new Node(data, this.head); // Creates a new node
    this.head = newNode; // Sets the head to the new node
  }

  delete(data) {
    if (!this.head) return; // Checks if the list is empty

    if (this.head.data === data) {
      // Checks if the data is in the head
      this.head = this.head.next; // Sets the head to the next node
      return;
    }

    let current = this.head; // Sets the current node to the head
    while (current.next && current.next.data !== data) {
      // Checks if the next node is not null and the data is not in the next node
      current = current.next; // Sets the current node to the next node
    }

    if (current.next) {
      // Checks if the next node is not null
      current.next = current.next.next; // Sets the next node to the node after the next node
    }
  }

  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true; // Checks if the data is in the current node
      current = current.next; // Sets the current node to the next node
    }
    return false; // Returns false if the data is not found
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const list = new LinkedList();

const menu = () => {
  console.log("\n1. Append data to list");
  console.log("2. Prepend data to list");
  console.log("3. Delete data from list");
  console.log("4. Find data in list");
  console.log("5. Display list");
  console.log("6. Exit");
  rl.question("Enter your choice: ", (answer) => {
    switch (answer) {
      case "1":
        rl.question("Enter data to append: ", (data) => {
          list.append(data);
          menu();
        });
        break;
      case "2":
        rl.question("Enter data to prepend: ", (data) => {
          list.prepend(data);
          menu();
        });
        break;
      case "3":
        rl.question("Enter data to delete: ", (data) => {
          list.delete(data);
          menu();
        });
        break;
      case "4":
        rl.question("Enter data to find: ", (data) => {
          const found = list.find(data);
          console.log(found ? "Data found" : "Data not found");
          menu();
        });
        break;
      case "5":
        list.display();
        menu();
        break;
      case "6":
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please enter a valid option.");
        menu();
    }
  });
};

menu();
