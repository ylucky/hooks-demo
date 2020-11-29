import React, { useState, useEffect, useCallback } from "react";
import UsersHook from "../hooks/setUsers";
import DetailHook from "../hooks/setDetail";
export default function HooksDemo() {
  const [count, setCount] = useState(-1);
  const users = UsersHook();
  const detail = DetailHook("zhanwei", [count]);
  //   useEffect(() => {
  //     //mount
  //     // setTimeout(() => { //模拟后台 cnode
  //     //   setUsers([{ name: "123" }]);
  //     // }, 1000);
  //     console.log("useEffect");
  //     //详情
  // //const [current] = count;

  //     fetch(`http://jsonplaceholder.typicode.com/posts/${count}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("data", data);
  //         setDetail(data);
  //       });

  //     return () => {
  //       //unmount
  //     };
  //   }, [count]);
  const handleClick = useCallback((id) => {
    console.log("handleClick", id);
    setCount(id);
  }, []);
  if (users.length === 0) return "loading";
  return (
    <>
      hooks
      <ul>
        {users.map((item, index) => (
          <li key={item.id} onClick={() => handleClick(item.id)}>
            {index}:{item.title}
          </li>
        ))}
      </ul>
      {detail ? (
        <div dangerouslySetInnerHTML={{ __html: count + detail.title }}></div>
      ) : null}
    </>
  );
}
