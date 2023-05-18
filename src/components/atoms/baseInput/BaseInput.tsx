import { MyInputProps } from "../../../interfaces/inputProps/MyInputProps";

type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  MyInputProps;

function BaseInput({
  labelname,
  className,
  errormessage,
  type,
  id,
  value,
  placeholder,
  onChange,
  ...otherProps
}: InputBaseProps) {
  let styleText = {};
  if (otherProps.errormessage != "") {
    styleText = { color: "red" };
  }

  return (
    <>
      <label className="label-width" htmlFor={id}>
        {labelname}
        <input
          {...otherProps}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />{" "}
      </label>
      <p style={styleText}>{errormessage}</p>
    </>
  );
}

export default BaseInput;
