import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h4>Count:{count}</h4>
      <h4>Count1:{count1}</h4>
      <h2>Satya Sai Thota</h2>
      <h3>Bhimavarm</h3>
      <h4>Chinss07</h4>
    </div>
  );
};

export default User;
