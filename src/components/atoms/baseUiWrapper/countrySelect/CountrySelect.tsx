import {
  MySelectProps,
  SelectBaseProps,
} from "../../../../interfaces/inputProps/FormProps";
import BaseSelect from "../../baseUi/BaseSelect";

function CountrySelect({
  labelname,
  errormessage,
  id,
  values,
  placeholder,
  onChange,
  ...otherProps
}: SelectBaseProps & MySelectProps) {
  return (
    <>
      <BaseSelect
        {...otherProps}
        labelname={labelname}
        id={id}
        values={values}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default CountrySelect;
