import {
  InputBaseProps,
  MyInputProps,
} from "../../../../interfaces/inputProps/FormProps";
import OnlyNumberInput from "../../../../shared/onlyNumberInput/OnlyNumberInput";
import BaseInput from "../../baseUi/BaseInput";

function TelefonoInput({
  labelname,
  errormessage,
  type,
  id,
  value,
  placeholder,
  onChange,
  ...otherProps
}: InputBaseProps & MyInputProps) {
  return (
    <>
      <BaseInput
        {...otherProps}
        labelname={labelname}
        type={type}
        id={id}
        value={OnlyNumberInput(value)}
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default TelefonoInput;
