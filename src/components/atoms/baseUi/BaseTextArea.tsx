import { MyInputProps } from "../../../interfaces/inputProps/FormProps";

type TextAreaBaseProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  MyInputProps;

function BaseTextArea({
  labelname,
  errormessage,
  id,
  textHint,
  value,
  placeholder,
  onChange,
  ...otherProps
}: TextAreaBaseProps) {
  let styleText = {};
  if (otherProps.errormessage != "") {
    styleText = { color: "red" };
  }

  return (
    <>
      <label htmlFor={id}>{labelname}</label>
      <textarea
        {...otherProps}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />{" "}
      <p className="textarea--textHint">{textHint}</p>
      <p style={styleText}>{errormessage}</p>
    </>
  );
}

export default BaseTextArea;
