import React, { useEffect } from "react";
import BaseInputSelectFile from "./BaseInputSelectFile";
import BaseInputListFiles from "./BaseInputListFiles";
interface MyProps {
  id: string | undefined;
  label: string;
  onAddFile: Function;
}

function BaseInputFiles({ id, onAddFile, label }: MyProps) {
  const [files, setFiles] = React.useState([]);

  useEffect(() => {
    onAddFile(files);
  }, [files]);

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    console.log("file list", fileList);
    setFiles([...files, ...Array.from(fileList)]);
  };
  const handleRemoveFile = (name: File) => {
    const newFiles = files.filter((file) => file.name !== name);
    setFiles(newFiles);
    console.log("file remove:", newFiles);
  };

  return (
    <>
      <br />
      <div>
        <label>{label}</label>
        <div className="file--box">
          {" "}
          <img
            className="file--img"
            src="../../../../public/immagini/addImg.PNG"
            alt="My SVG"
          />
          <div className="file--flexbox">
            <BaseInputSelectFile id={id} handleFiles={handleFiles} />
            <br />
            <BaseInputListFiles
              files={files}
              handleRemoveFile={handleRemoveFile}
            />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default BaseInputFiles;
