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
    var arraySize = parseInt(size);
    var arr = [];
    var insertElement = function (index) {
      if (index < arraySize) {
        rl.question(
          "Enter element ".concat(index + 1, ": "),
          function (element) {
            arr.push(parseInt(element));
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
  rl.question(
    "Enter the index where you want to insert the element: ",
    function (index) {
      rl.question("Enter the element to be inserted: ", function (element) {
        var idx = parseInt(index);
        if (idx >= 0 && idx <= arr.length) {
          arr.splice(idx, 0, parseInt(element));
        } else {
          console.log("Invalid index.");
        }
        callback(arr);
      });
    }
  );
}
function deleteElement(arr, callback) {
  rl.question("Enter the element to be deleted: ", function (element) {
    var index = arr.indexOf(parseInt(element));
    if (index > -1) {
      arr.splice(index, 1);
    } else {
      console.log("Element not found in the array.");
    }
    callback(arr);
  });
}
function searchElement(arr) {
  rl.question("Enter the element to search for: ", function (element) {
    var index = arr.indexOf(parseInt(element));
    if (index > -1) {
      console.log("Element found at index: ".concat(index));
    } else {
      console.log("Element not found in the array.");
    }
  });
}
function displayArray(arr) {
  console.log("Array: ", arr);
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
