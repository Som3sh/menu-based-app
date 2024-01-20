"use client";
import React, { useState, useEffect } from "react";
import Loading from "react-loading";

import linkedlistOperationsCode from "!!raw-loader!./LinkedListOperations.js";
import CodeDisplay from "../../components/CodeDisplay";

const sampleCode = linkedlistOperationsCode;

function LinkedList() {
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
    <div className=" items-center">
      <div className=" pt-10 pl-[30rem]">
        <div className="max-h-[500px] overflow-auto pb-10 w-3/5 border border-white bg-black">
          <CodeDisplay code={sampleCode} />
        </div>
      </div>
      <div className=" items-center pl-[20rem]">
        <iframe
          src="https://www.programiz.com/javascript/online-compiler/"
          className=" h-[600px] w-[1000px] pt-10 pb-10 items-center "
        />
      </div>
    </div>
  );
}

export default LinkedList;
