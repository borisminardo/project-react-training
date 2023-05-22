interface File {
  lastModified: Date;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

interface MyProps {
  files: File[];
  handleRemoveFile: Function;
}

function BaseInputListFiles({ files, handleRemoveFile }: MyProps) {
  return (
    <div>
      {files && files.length > 0 && (
        <ul>
          {files.map((filee: File) => {
            return (
              <li className="file--li" key={filee.name}>
                {filee.name}{" "}
                <button
                  className="file--removebutton"
                  onClick={() => handleRemoveFile(filee.name)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BaseInputListFiles;
