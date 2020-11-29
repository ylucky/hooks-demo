import React, { useState, useEffect } from "react";
const MOCK_DATAS = [];

export default function UsersHook() {
  const [users, setUsers] = useState(MOCK_DATAS);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data);
      });
  }, []);
  return users;
}
