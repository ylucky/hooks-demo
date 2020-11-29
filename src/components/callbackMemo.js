import React, { useCallback, useEffect, useMemo, useState } from "react";

//useReducer 多个操作，复杂的状态处理
export default function CallbackMemo() {
  const [count, setCount] = useState(0);
  const [other, setOtherCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setOtherCount((other) => other + 1);
    }, 30);
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  console.log("gegnxin....");//会一直打印 影响性能

  //   const result = count * 100; //
  //   const handleClick = () => {
  //     console.log("handleClick", count);
  //   };

  const handleClick = useCallback((ev) => {//
    console.log("ev", ev.target);
  }, []);


  const result = useMemo(()=>{//只根据count计算渲染
    return count*100
  },[count])
  return (
    <>
      CallbackMemo
      <div onClick={handleClick}>
        {count} {other} {result}
      </div>
    </>
  );
}
