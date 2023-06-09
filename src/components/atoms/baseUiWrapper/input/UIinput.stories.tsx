import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../../index.css";
import UIinput from "./UIinput";

export default {
  title: "Text Input",
};

export const TextInput = () => {
  return (
    <UIinput
      labelname="Test"
      error={false}
      errormessage=""
      type="text"
      id="nome"
      value=""
      placeholder=""
    />
  );
};

export const TextInputNome = () => {
  return (
    <UIinput
      labelname="Nome*"
      error={false}
      errormessage=""
      type="text"
      id="nome"
      value="Boris"
      placeholder=""
    />
  );
};

export const TextInputEmail = () => {
  return (
    <UIinput
      labelname="Email*"
      error={false}
      errormessage=""
      type="text"
      id="email"
      value="borisminardo@live.it"
      placeholder=""
    />
  );
};
export const TextInputEmailError = () => {
  return (
    <UIinput
      labelname="Email*"
      error={true}
      errormessage="Formato email invalido"
      type="text"
      id="email"
      value="borisminardolive.it"
      placeholder=""
    />
  );
};
