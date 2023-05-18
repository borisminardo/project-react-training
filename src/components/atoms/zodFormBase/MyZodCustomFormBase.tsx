import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import NomeInput from "../nomeInput/NomeInput";
import CognomeInput from "../cognomeInput/CognomeInput";
import TelefonoInput from "../telefonoInput/TelefonoInput";
import EmailInput from "../emailInput/EmailInput";
import MyDebuggerObj from "../../../shared/debuggerPrinter/MyDebuggerObj";
import MyFormButton from "../formButton/MyFormButton";

function MyCustomFormBase() {
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
  });

  const [formError, setFormError] = useState({
    nome: false,
    cognome: false,
    telefono: false,
    email: false,
  });

  const [alert, setAlert] = useState(false);
  //test commit
  function handleValidForm(event: any) {
    event.preventDefault();
    setFormError({
      ...formError,
      nome: form.nome === "",
      cognome: form.cognome === "",
      telefono: form.telefono === "",
      email: form.email === "",
    });
    setAlert(true);
  }

  function valida() {
    if (
      form.cognome === "" ||
      form.nome === "" ||
      form.telefono === "" ||
      form.email === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <form onSubmit={handleValidForm} className="form-width">
        <div className="form--row">
          <NomeInput
            className=""
            type="text"
            labelname="Nome"
            id="nome"
            stile="color-red"
            errormessage={formError.nome ? "Nome obbligatorio" : ""}
            value={form.nome}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const val = event.target.value;
              setForm({ ...form, nome: val });
              setAlert(false);
            }}
          ></NomeInput>
        </div>
        <div className="form--row">
          <CognomeInput
            type="text"
            labelname="Cognome"
            id="cognome"
            className=""
            stile="color-red"
            errormessage={formError.cognome ? "Cognome obbligatorio" : ""}
            value={form.cognome}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const val = event.target.value;
              setForm({ ...form, cognome: val });
              setAlert(false);
            }}
          ></CognomeInput>
        </div>
        <div className="form--row">
          <TelefonoInput
            type="text"
            labelname="Telefono"
            id="telefono"
            className=""
            stile="color-red"
            errormessage={formError.telefono ? "Telefono obbligatorio" : ""}
            value={form.telefono}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const val = event.target.value;
              setForm({ ...form, telefono: val });
              setAlert(false);
            }}
          ></TelefonoInput>
        </div>
        <div className="form--row">
          <EmailInput
            type="text"
            labelname="Email"
            id="email"
            stile="color-red"
            className=""
            errormessage={formError.email ? "Errore nella email" : ""}
            value={form.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const val = event.target.value;
              setForm({ ...form, email: val });
              setAlert(false);
            }}
          ></EmailInput>
        </div>
        <MyFormButton
          disable={valida()}
          type="submit"
          titolo="Valida"
        ></MyFormButton>
      </form>
      {alert && (
        <Alert
          style={{ marginTop: "20px" }}
          key={"success"}
          variant={"success"}
        >
          Success!
        </Alert>
      )}
      <MyDebuggerObj className="mt-3" obj={form}></MyDebuggerObj>
    </>
  );
}

export default MyCustomFormBase;
