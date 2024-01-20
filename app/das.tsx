<div className="pl-2 ">
  <h1 className=" text-xl font-extrabold">Linked List Operations</h1>
  <h1>Algorithm:</h1>
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
    </ul>
    <li className="font-semibold">Append data to the list:</li>
    <ul className=" list-disc pl-4">
      <li>Prompt the user for the data to append.</li>
      <li>Create a new node with the given data.</li>
      <li>If the list is empty, set the new node as the head of the list.</li>
      <li>
        If the list is not empty, traverse to the end of the list and link the
        new node to the last node.
      </li>
    </ul>
    <li className="font-semibold">Prepend data to the list:</li>
    <ul className=" list-disc pl-4">
      <li>Prompt the user for the data to prepend.</li>
      <li>
        Create a new node with the given data and set its next pointer to the
        current head of the list.
      </li>
      <li>Update the head of the list to be the new node.</li>
    </ul>
    <li className="font-semibold">Delete data from the list:</li>
    <ul className=" list-disc pl-4">
      <li>Prompt the user for the data to delete.</li>
      <li>
        If the head of the list contains the data, update the head to be the
        next node.
      </li>
      <li>
        If the data is not at the head, traverse the list to find the node
        before the node containing the data.
      </li>
      <li>
        Once found, link the previous node to the next node of the node to be
        deleted, effectively removing it from the list.
      </li>
    </ul>
    <li className="font-semibold">Find data in the list:</li>
    <ul className=" list-disc pl-4">
      <li>Prompt the user for the data to find.</li>
      <li>
        Traverse the list, checking each nodes data against the given data.
      </li>
      <li>If a node with the data is found, return true (data found).</li>
      <li>If no such node is found, return false (data not found).</li>
    </ul>
    <li className="font-semibold">Display the list:</li>
    <ul className=" list-disc pl-4">
      <li>Traverse the list from the head.</li>
      <li>Print the data of each node until the end of the list is reached.</li>
    </ul>
    <li className="font-semibold">Exit:</li>
    <ul>
      <li>Close the readline interface and terminate the application.</li>
    </ul>
    <li className="font-semibold pt-6">Repeat the process:</li>

    <ul className=" list-disc pl-4">
      <li>
        After each operation (except for &quot;Exit&quot;), display the main
        menu again and prompt the user for their next choice.
      </li>
    </ul>

    <li className="font-semibold pt-6 text-red-500">
      End the application when the user selects the &quot;Exit&quot; option.
    </li>
  </ol>
  <p>
    This algorithm provides a high-level overview of the steps the code performs
    to manage a linked list through a command-line interface. It includes
    operations to append, prepend, delete, find, and display nodes in the list,
    as well as to exit the application.
  </p>
</div>;
