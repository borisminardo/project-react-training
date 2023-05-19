import { MySelectProps } from "../../../interfaces/inputProps/FormProps";

type SelectBaseProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  MySelectProps;

function BaseSelect({
  labelname,
  className,
  errormessage,
  id,
  textHint,
  values,
  defaultValue,
  placeholder,
  onChange,
  ...otherProps
}: SelectBaseProps) {
  let styleText = {};
  if (otherProps.errormessage != "") {
    styleText = { color: "red" };
  }

  return (
    <>
      <label htmlFor={id}>{labelname}</label>
      <select
        {...otherProps}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        className={className}
      >
        {values.map((value) => {
          return (
            <option key={value.id} value={value.id}>
              {value.name}
            </option>
          );
        })}
      </select>
      <p style={styleText}>{errormessage}</p>
    </>
  );
}

export default BaseSelect;
