import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import MyDebuggerObj from "../../../shared/debuggerPrinter/MyDebuggerObj";
import MyFormButton from "../formButton/MyFormButton";
import DescriptionTextArea from "../baseUiWrapper/descriptionTextArea/DescriptionTextArea";
import CountrySelect from "../baseUiWrapper/countrySelect/CountrySelect";
import CognomeInput from "../baseUiWrapper/cognomeInput/CognomeInput";
import EmailInput from "../baseUiWrapper/emailInput/EmailInput";
import NomeInput from "../baseUiWrapper/nomeInput/NomeInput";
import TelefonoInput from "../baseUiWrapper/telefonoInput/TelefonoInput";
import { selectValues } from "../../../interfaces/viewModel/selectValues";
import BaseGroupCheckBox from "../baseUi/BaseGroupCheckBox";
import { checkBoxValues } from "../../../interfaces/viewModel/checkBoxNotificationValues";

function MyCustomFormBase() {
  //seleziona valore di default da 'selectValues'
  const defaultValue = selectValues.find((item) => item.defaultValue)
    ? selectValues.find((item) => item.defaultValue)?.id
    : 0;

  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
    descrizione: "",
    paese: defaultValue,
    notificationPush: [1, 2, 3],
  });

  const [formError, setFormError] = useState({
    nome: false,
    cognome: false,
    telefono: false,
    email: false,
    descrizione: false,
    paese: false,
    notificationPush: false,
  });

  const [alert, setAlert] = useState(false);

  // al submit del button
  function handleValidForm(event: any) {
    event.preventDefault();
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      setFormError({
        ...formError,
        email: true,
      });
      setAlert(false);
      console.log(formError);
    } else {
      setFormError({
        ...formError,
        email: false,
      });
      setAlert(true);
      console.log(form);
    }
  }

  function valida() {
    if (
      form.cognome === "" ||
      form.nome === "" ||
      form.telefono === "" ||
      form.email === "" ||
      form.paese === 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <hr />
      <form onSubmit={handleValidForm}>
        <div className="form--row">
          <NomeInput
            type="text"
            labelname="Nome*"
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
            labelname="Cognome*"
            id="cognome"
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
            labelname="Telefono*"
            id="telefono"
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
            labelname="Email*"
            id="email"
            stile="color-red"
            errormessage={formError.email ? "Formato email invalido" : ""}
            value={form.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const val = event.target.value;
              setForm({ ...form, email: val });
              setAlert(false);
            }}
          ></EmailInput>
        </div>
        <div className="description--row">
          <DescriptionTextArea
            labelname="Descrizione"
            id="description"
            stile="color-red"
            textHint="Scrivi qualcosa su di te..."
            errormessage={
              formError.descrizione ? "Errore nella descrizione" : ""
            }
            value={form.descrizione}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              const val = event.target.value;
              setForm({ ...form, descrizione: val });
              setAlert(false);
            }}
          ></DescriptionTextArea>
        </div>

        <CountrySelect
          labelname="Paese*"
          id="paese"
          stile="color-red"
          values={selectValues}
          errormessage={formError.descrizione ? "Scelta obbligatoria" : ""}
          defaultValue={defaultValue}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            const val = parseInt(event.target.value);
            setForm({ ...form, paese: val });
            setAlert(false);
          }}
        ></CountrySelect>
        <div className="padding--top">
          <BaseGroupCheckBox
            values={checkBoxValues}
            onChange={(selected: any) => {
              setForm({ ...form, notificationPush: selected });
              setAlert(false);
            }}
          ></BaseGroupCheckBox>
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
          Submitted!
        </Alert>
      )}
      <MyDebuggerObj
        className="mt-3"
        obj={form}
        submitted={alert}
      ></MyDebuggerObj>
    </>
  );
}

export default MyCustomFormBase;
