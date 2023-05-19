import { MyCheckboxProps } from "../../../interfaces/inputProps/FormProps";

type MyRadioButtonProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  MyCheckboxProps;

function BaseRadioButton({
  value,
  lableName,
  name,
  description,
  id,
  onChange,
  ...otherProps
}: MyRadioButtonProps) {
  return (
    <>
      <div className="checkbox--group">
        <input
          className="checkbox--input"
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />

        <label htmlFor={id} className="checkbox--label">
          {lableName}
        </label>
      </div>
      <p className="checkbox--description">{description}</p>
    </>
  );
}

export default BaseRadioButton;
