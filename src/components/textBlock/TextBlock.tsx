import React, { useState } from "react";

export default function TextBlock() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <>
      <p>My input text: {value}</p>
      <div style={styles.container}>
        <input
          style={styles.input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    maxWidth: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  input: {
    padding: "8px 12px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    outline: "none",
    ":focus": {
      borderColor: "#4a90e2",
      boxShadow: "0 0 0 2px rgba(74, 144, 226, 0.2)",
    },
  },
  text: {
    margin: "0",
    padding: "8px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
  },
};
