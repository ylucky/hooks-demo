import React, { useState, useEffect } from "react";

export default function DetailHook(parmars, deps) {
  const [detail, setDetail] = useState(); //1.zhanwei 2.yilai

  useEffect(() => {
    const [count] = deps;

    count != -1 &&
      fetch(`http://jsonplaceholder.typicode.com/posts/${count}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          setDetail(data);
        });
  }, deps);
  return detail;
}
