import React, { useEffect } from "react";
import BaseCheckBox from "./BaseCheckBox";

function BaseGroupCheckBox({
  values,
  title,
  errorMessage,
  onChange,
  ...otherProps
}: any) {
  const [selected, setSelected] = React.useState([]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const val = target.id;
    const checked = target.checked;
    const parseVal = parseInt(val, 0);
    if (!checked) {
      setSelected([...selected.filter((i) => i !== parseVal)]);
    } else {
      setSelected([...selected, parseVal]);
    }
  };
  return (
    <div>
      <legend className="legend--bold"> {title}</legend>
      {values.map((checkbox: any) => {
        return (
          <BaseCheckBox
            key={checkbox.id}
            id={checkbox.id}
            name={checkbox.id}
            value={checkbox.value}
            lableName={checkbox.lableName}
            description={checkbox.description}
            onChange={handleChange}
          ></BaseCheckBox>
        );
      })}
    </div>
  );
}

export default BaseGroupCheckBox;
