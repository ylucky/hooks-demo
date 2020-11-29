import React, { Component, useState, useEffect } from "react";

function FuncCom() {
  const [count, setCount] = useState(0); //状态 0->初始值
  const [disabled, setDisabled] = useState(0); //状态 0->初始值
  useEffect(() => {
    //一个useEffect  干一件事
    if (count % 2 == 0) {
      console.log("fcount", count);
    }
    return () => {
      console.log("卸载", count);
    };
  }, [count]); //[] 引起副作用的依赖

  useEffect(() => {
    console.log("挂载");
    const handleClick = () => console.log("handleClick");
    //组件挂载
    document.addEventListener("click", handleClick);
    //组件卸载
    return () => {
      console.log("卸载");
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <>
      <button onClick={() => setDisabled(!disabled)}>
        toogle {disabled ? "true" : "false"}
      </button>

      <h3>
        func {count}
        <button onClick={() => setCount(count + 1)}>fdianji</button>
      </h3>
    </>
  );
}

export default FuncCom;
