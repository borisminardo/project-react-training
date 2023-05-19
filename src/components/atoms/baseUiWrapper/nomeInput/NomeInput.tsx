import {
  InputBaseProps,
  MyInputProps,
} from "../../../../interfaces/inputProps/FormProps";
import TextInputAZ from "../../../../shared/onlyTextInputAZ/TextInputAZ";
import BaseInput from "../../baseUi/BaseInput";

function NomeInput({
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
        value={TextInputAZ(value)}
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default NomeInput;
