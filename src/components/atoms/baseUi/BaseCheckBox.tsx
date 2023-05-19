import { MyCheckboxProps } from "../../../interfaces/inputProps/FormProps";

type CheckBoxBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  MyCheckboxProps;

function BaseCheckBox({
  value,
  lableName,
  description,
  id,
  onChange,
  ...otherProps
}: CheckBoxBaseProps) {
  return (
    <>
      <div className="checkbox--group">
        <input
          {...otherProps}
          type="checkbox"
          id={id}
          name={id}
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

export default BaseCheckBox;
