import { InputButton } from "../../../interfaces/inputProps/FormProps";
interface MyProps {
  disable: boolean;
  titolo: string;
  marginLeft?: boolean;
  onClick?: Function;
}

function MyFormButton(props: MyProps & InputButton) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disable}
      style={{ marginTop: "19px", marginLeft: props.marginLeft ? "10px" : "0" }}
      className={props.disable ? "input--button-disabled" : "input--button"}
    >
      {props.titolo}
    </button>
  );
}

export default MyFormButton;
