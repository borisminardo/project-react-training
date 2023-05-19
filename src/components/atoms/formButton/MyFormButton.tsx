import { InputButton } from "../../../interfaces/inputProps/FormProps";
interface MyProps {
  disable: boolean;
  titolo: string;
}

function MyFormButton(props: MyProps & InputButton) {
  return (
    <button
      disabled={props.disable}
      style={{ marginTop: "19px" }}
      className={props.disable ? "input--button-disabled" : "input--button"}
      type="submit"
    >
      {props.titolo}
    </button>
  );
}

export default MyFormButton;
