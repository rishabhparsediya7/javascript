import { useState } from "react";
import "./styles.css";

export const File = ({ name, size }) => {
  return (
    <div className="file">
      <p>{name}</p>
      <p>{size}</p>
    </div>
  );
};

export const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const handleFolderClick = () => {
    setExpand(!expand);
    console.log(data);
  };

  if (data.type === "folder") {
    return (
      <div className="folder">
        <p className="folder-name">
          <span onClick={() => handleFolderClick(data?.children)}>
            📁 {data?.name}
          </span>
          <span
            style={{
              backgroundColor: "#242424",
              borderRadius: "8px",
              color: "white",
              padding: "4px 10px", // Optional for better UI
              cursor: "pointer", // Makes it more interactive
            }}
            onClick={() => addInput(data)}
          >
            +
          </span>
        </p>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "20px" }}
        >
          {data &&
            data?.children?.map((child) => {
              return <Folder data={child} />;
            })}
        </div>
      </div>
    );
  }
  return <File name={data?.name} />;
};
