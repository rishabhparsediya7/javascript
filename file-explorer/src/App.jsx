import "./styles.css";
import file from "./data/file.json";
import { File, Folder } from "./component/file";

export default function App() {
  const rootFolderName = file?.name;
  const rootChildren = file?.children;
  const rootType = file?.type;

  if (rootType === "file") {
    const rootSize = file?.size;
    return <File name={rootFolderName} size={rootSize} />;
  }

  return (
    <div className="App">
      <Folder data={file} />
    </div>
  );
}
