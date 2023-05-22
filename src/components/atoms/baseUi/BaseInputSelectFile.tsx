import React, { ChangeEventHandler, useEffect } from "react";

interface File {
  id: string | undefined;
  handleFiles: ChangeEventHandler<HTMLInputElement>;
}

function BaseInputSelectFile({ id, handleFiles }: File) {
  return (
    <div>
      <div>
        <label htmlFor={id}>Seleziona un file:</label>
        <input type="file" id={id} name={id} onChange={handleFiles}></input>
      </div>
      <p className="file--extension">PNG, JPG, GIF, XLS, DOC, max 10 MB</p>
    </div>
  );
}

export default BaseInputSelectFile;
