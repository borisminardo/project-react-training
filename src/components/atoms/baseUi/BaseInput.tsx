import { MyInputProps } from "../../../interfaces/inputProps/FormProps";

type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  MyInputProps;

function BaseInput({
  labelname,
  error,
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
          className={id === "email" && error ? "input--emailerror" : ""}
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
