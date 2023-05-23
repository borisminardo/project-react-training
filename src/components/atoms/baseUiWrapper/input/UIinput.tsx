import {
  InputBaseProps,
  MyInputProps,
} from "../../../../interfaces/inputProps/FormProps";
import OnlyNumberInput from "../../../../shared/onlyNumberInput/OnlyNumberInput";
import TextInputAZ from "../../../../shared/onlyTextInputAZ/TextInputAZ";
import BaseInput from "../../baseUi/BaseInput";

function UIinput({
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
        value={
          type === "text" && (id === "nome" || id == "cognome")
            ? TextInputAZ(value)
            : type === "number"
            ? OnlyNumberInput(value)
            : value
        }
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default UIinput;
