var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("\n1. Create an array");
  console.log("2. Insert an element");
  console.log("3. Delete an element");
  console.log("4. Search for an element");
  console.log("5. Display the array");
  console.log("6. Exit");
}
function createArray(callback) {
  rl.question("Enter the maximum size of the array: ", function (size) {
    // reads the size of the array
    var arraySize = parseInt(size); // Takes the size of the array and converts it to an integer
    var arr = []; // Creates an empty array
    var insertElement = function (index) {
      // Function to insert elements into the array
      if (index < arraySize) {
        // Checks if the index is less than the size of the array
        rl.question(
          "Enter element ".concat(index + 1, ": "), // Reads the element to be inserted
          function (element) {
            // Callback function
            arr.push(parseInt(element)); // Inserts the element into the array
            insertElement(index + 1);
          }
        );
      } else {
        callback(arr);
      }
    };
    insertElement(0);
  });
}
function insertElement(arr, callback) {
  // Function to insert an element into the array
  rl.question(
    "Enter the index where you want to insert the element: ", // Reads the index where the element is to be inserted
    function (index) {
      // Callback function
      rl.question("Enter the element to be inserted: ", function (element) {
        // Reads the element to be inserted
        var idx = parseInt(index); // Converts the index to an integer
        if (idx >= 0 && idx <= arr.length) {
          // Checks if the index is valid
          arr.splice(idx, 0, parseInt(element)); // Inserts the element into the array
        } else {
          console.log("Invalid index.");
        }
        callback(arr);
      });
    }
  );
}
function deleteElement(arr, callback) {
  // Function to delete an element from the array
  rl.question("Enter the element to be deleted: ", function (element) {
    // Reads the element to be deleted
    var index = arr.indexOf(parseInt(element)); // Finds the index of the element
    if (index > -1) {
      // Checks if the element is present in the array
      arr.splice(index, 1); // Deletes the element from the array
    } else {
      console.log("Element not found in the array."); // Displays a message if the element is not found
    }
    callback(arr);
  });
}
function searchElement(arr) {
  rl.question("Enter the element to search for: ", function (element) {
    // Reads the element to be searched
    var index = arr.indexOf(parseInt(element)); // Finds the index of the element
    if (index > -1) {
      console.log("Element found at index: ".concat(index)); // Displays the index of the element
    } else {
      console.log("Element not found in the array.");
    }
  });
}
function displayArray(arr) {
  console.log("Array: ", arr); // Displays the array
}

function main() {
  var arr = [];
  return new Promise((resolve, reject) => {
    const operations = () => {
      menu();
      rl.question("Enter your choice: ", (choice) => {
        switch (parseInt(choice)) {
          case 1:
            createArray(function (newArr) {
              arr = newArr;
              operations();
            });
            break;
          case 2:
            insertElement(arr, function () {
              return operations();
            });
            break;
          case 3:
            deleteElement(arr, function () {
              return operations();
            });
            break;
          case 4:
            searchElement(arr);
            operations();
            break;
          case 5:
            displayArray(arr);
            operations();
            break;
          case 6:
            rl.close();
            resolve("Operations complete");
            break;
          default:
            console.log("Invalid choice. Please choose a valid option.");
            operations();
            break;
        }
      });
    };
    operations();
  });
}
main();
