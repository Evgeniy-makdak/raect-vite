import React, { useEffect, useState } from "react";

interface TextBlockProps {
  isActive: boolean;
}

export default function TextBlock({ isActive }: TextBlockProps) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setShow(true);
    }
  }

  const inputStyle = {
    border: isActive && value === "" ? "1px solid #000" : "none",
    outline: "none",
  };

  useEffect(() => {
    setLoading(true);
    const userList = async function () {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await responce.json();
      setUsers(users);
      setLoading(false);
    };
    userList();
  }, []);

  return (
    <>
      <p style={{ margin: "3rem" }}>My input text: </p> {show && <p>{value}</p>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        style={inputStyle}
      />
      {loading && <p>lodind...</p>}
      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
