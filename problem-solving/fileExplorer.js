const data = {
  name: "ReactProject",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "App.js",
          type: "file",
          size: "2KB",
          lastModified: "2025-01-25T12:00:00Z",
        },
        {
          name: "index.js",
          type: "file",
          size: "1KB",
          lastModified: "2025-01-25T12:00:00Z",
        },
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "Header.js",
              type: "file",
              size: "1.5KB",
              lastModified: "2025-01-25T12:00:00Z",
            },
            {
              name: "Footer.js",
              type: "file",
              size: "1.2KB",
              lastModified: "2025-01-25T12:00:00Z",
            },
          ],
        },
      ],
    },
    {
      name: "public",
      type: "folder",
      children: [
        {
          name: "index.html",
          type: "file",
          size: "3KB",
          lastModified: "2025-01-25T12:00:00Z",
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
      size: "1KB",
      lastModified: "2025-01-25T12:00:00Z",
    },
    {
      name: "README.md",
      type: "file",
      size: "0.5KB",
      lastModified: "2025-01-25T12:00:00Z",
    },
  ],
};

const recursriveChildren = (children) => {
  console.log("Children: ", children);
  //   if (children.length === 0) {
  //     return;
  //   }
  for (let i = 0; i < children.length; i++) {
    if (children[i].children) {
      console.log(children[i].children);
      const child = children[i].children;
      console.log("Children: ", child);
      recursriveChildren(child);
    }
  }
};

recursriveChildren(data.children);
