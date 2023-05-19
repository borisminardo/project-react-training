import BaseRadioButton from "./BaseRadioButton";

function BaseGroupRadioButton({
  values,
  name,
  title,
  onChange,
  ...otherProps
}: any) {
  return (
    <div>
      <legend className="legend--bold"> {title}</legend>
      {values.map((radio: any) => {
        return (
          <BaseRadioButton
            key={radio.id}
            id={radio.id}
            name={name}
            value={radio.id}
            lableName={radio.lableName}
            description={radio.description}
            onChange={onChange}
          ></BaseRadioButton>
        );
      })}
    </div>
  );
}

export default BaseGroupRadioButton;
