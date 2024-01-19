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
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
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
