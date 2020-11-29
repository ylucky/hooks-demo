import React, { useEffect, useRef } from "react";
//buhao
const RefInput = () => {
  const ref = useRef(); //引用
  useEffect(() => {
    ref.current.focus();
  }, []);

  return <input ref={ref} />;
};
//HAO
const GoodRef = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function RefDemo() {
  //HAO

  const goodRef = useRef(); //引用
  useEffect(() => {
    goodRef.current.focus();
    goodRef.current.value = "hello";
  }, []);
  //HAO

  return (
    <>
      ref <RefInput />
      <GoodRef placeholder="请输入。。。" ref={goodRef} />
    </>
  );
}
