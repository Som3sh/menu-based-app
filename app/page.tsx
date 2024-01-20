"use client";
import React, { useState, useEffect } from "react";
import Loading from "react-loading";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 600ms delay

    return () => clearTimeout(timer); // cleanup on component unmount
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading type={"bubbles"} color={"#fff"} />
      </div>
    );
  }
  return (
    <div className="flex flex-row space-x-6 pt-[10rem] ">
      <div className=" h-[600px] w-1/2 border border-white overflow-auto bg-black">
        <div className="pl-2 ">
          <h1 className=" text-xl font-extrabold">Array Operations</h1>

          <h2 className=" text-lg font-bold pt-6 pb-4">Algorithm:</h2>

          <ol>
            <li className="font-semibold">
              Start the application and display the main menu with options:
            </li>
            <ul className=" list-disc pl-4">
              <li>Create an array</li>
              <li>Insert an element</li>
              <li>Delete an element</li>
              <li>Search for an element</li>
              <li>Display the array</li>
              <li>Exit</li>
              <img src="/menu.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Create an array:</li>
            <ul className=" list-disc pl-4">
              <li>Prompt the user for the maximum size of the array.</li>
              <li>Initialize an empty array.</li>
              <li>
                For each index from 0 to the specified size - 1, prompt the user
                to enter an element and add it to the array.
              </li>
              <img src="/create.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Insert an element:</li>
            <ul className=" list-disc pl-4">
              <li>
                Prompt the user for the index at which they want to insert an
                element.
              </li>
              <li>
                Validate the index (it should be within the bounds of the
                array).
              </li>
              <li>
                If the index is valid, prompt the user for the element to be
                inserted and add it to the array at the specified index.
              </li>
              <li>If the index is invalid, display an error message.</li>
              <img src="/insert.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Delete an element:</li>
            <ul className=" list-disc pl-4">
              <li>Prompt the user for the element they want to delete.</li>
              <li>Search for the element in the array.</li>
              <li>If the element is found, remove it from the array.</li>
              <li>If the element is not found, display an error message.</li>
              <img src="/delete.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li>Search for an element:</li>
            <ul className=" list-disc pl-4">
              <li>Prompt the user for the element they want to search for.</li>
              <li>Search for the element in the array.</li>
              <li>
                If the element is found, display the index at which it is
                located.
              </li>
              <li>If the element is not found, display an error message.</li>
              <img src="/search.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Display the array:</li>
            <ul className=" list-disc pl-4">
              <li>Print the elements of the array to the console.</li>
              <img src="/display.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Exit:</li>
            <ul className=" list-disc pl-4">
              <li>
                Close the readline interface and terminate the application.
              </li>
            </ul>
            <li className="font-semibold pt-6">Repeat the process:</li>
            <ul className=" list-disc pl-4">
              <li>
                After each operation (except for &quot;Exit&quot;), display the
                main menu again and prompt the user for their next choice.
              </li>
            </ul>
            <li className="font-semibold pt-6 text-red-500">
              End the application when the user selects the &quot;Exit&quot;
              option.
            </li>
          </ol>

          <p className="pt-4">
            This algorithm provides a high-level overview of the steps the code
            performs. It is important to note that the actual implementation may
            involve additional details such as error handling and user input
            validation.
          </p>
        </div>
      </div>
      <div className="h-[600px] w-1/2 border border-white overflow-auto bg-black">
        <div className="pl-2 ">
          <h1 className=" text-xl font-extrabold">Linked List Operations</h1>
          <h1 className="font-bold text-lg pt-6 pb-4">Algorithm:</h1>
          <ol>
            <li className="font-semibold">
              Start the application and display the main menu with options:
            </li>
            <ul className=" list-disc pl-4">
              <li>Append data to list</li>
              <li>Prepend data to list</li>
              <li>Delete data from list</li>
              <li>Find data in list</li>
              <li>Display list</li>
              <li>Exit</li>
              <img src="/menu_li.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Append data to the list:</li>
            <ul className=" list-disc pl-4">
              <li>Prompt the user for the data to append.</li>
              <li>Create a new node with the given data.</li>
              <li>
                If the list is empty, set the new node as the head of the list.
              </li>
              <li>
                If the list is not empty, traverse to the end of the list and
                link the new node to the last node.
              </li>
              <img src="/append.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Prepend data to the list:</li>
            <ul className=" list-disc pl-4">
              <li>Prompt the user for the data to prepend.</li>
              <li>
                Create a new node with the given data and set its next pointer
                to the current head of the list.
              </li>
              <li>Update the head of the list to be the new node.</li>
              <img src="/prepend.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Delete data from the list:</li>
            <ul className=" list-disc pl-4">
              <li>Prompt the user for the data to delete.</li>
              <li>
                If the head of the list contains the data, update the head to be
                the next node.
              </li>
              <li>
                If the data is not at the head, traverse the list to find the
                node before the node containing the data.
              </li>
              <li>
                Once found, link the previous node to the next node of the node
                to be deleted, effectively removing it from the list.
              </li>
              <img src="/delete_li.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Find data in the list:</li>
            <ul className=" list-disc pl-4">
              <li>Prompt the user for the data to find.</li>
              <li>
                Traverse the list, checking each nodes data against the given
                data.
              </li>
              <li>
                If a node with the data is found, return true (data found).
              </li>
              <li>If no such node is found, return false (data not found).</li>
              <img src="/find.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Display the list:</li>
            <ul className=" list-disc pl-4">
              <li>Traverse the list from the head.</li>
              <li>
                Print the data of each node until the end of the list is
                reached.
              </li>
              <img src="/display.png" alt="menu" className=" pt-4 pb-4" />
            </ul>
            <li className="font-semibold">Exit:</li>
            <ul>
              <li>
                Close the readline interface and terminate the application.
              </li>
            </ul>
            <li className="font-semibold pt-6">Repeat the process:</li>

            <ul className=" list-disc pl-4">
              <li>
                After each operation (except for &quot;Exit&quot;), display the
                main menu again and prompt the user for their next choice.
              </li>
            </ul>

            <li className="font-semibold pt-6 text-red-500">
              End the application when the user selects the &quot;Exit&quot;
              option.
            </li>
          </ol>
          <p className="pt-4">
            This algorithm provides a high-level overview of the steps the code
            performs to manage a linked list through a command-line interface.
            It includes operations to append, prepend, delete, find, and display
            nodes in the list, as well as to exit the application.
          </p>
        </div>
      </div>
    </div>
  );
}
