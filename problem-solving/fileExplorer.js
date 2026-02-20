import React, { useState } from "react";

const FileNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        onClick={() => node.isFolder && setExpanded(!expanded)}
        style={{ cursor: node.isFolder ? "pointer" : "default" }}
      >
        {node.isFolder ? (expanded ? "📂" : "📁") : "📄"} {node.name}
      </div>

      {expanded &&
        node.children?.map((child) => <FileNode key={child.id} node={child} />)}
    </div>
  );
};

const FileExplorer = ({ data }) => {
  return (
    <div>
      {data.map((node) => (
        <FileNode key={node.id} node={node} />
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    name: "src",
    isFolder: true,
    children: [
      {
        id: 2,
        name: "components",
        isFolder: true,
        children: [{ id: 3, name: "FileExplorer.js", isFolder: false }],
      },
    ],
  },
];

export default function App() {
  return <FileExplorer data={data} />;
}
