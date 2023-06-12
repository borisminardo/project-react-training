import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import MyDebuggerObj from "../../../shared/debuggerPrinter/MyDebuggerObj";
import MyFormButton from "../formButton/MyFormButton";
import DescriptionTextArea from "../baseUiWrapper/descriptionTextArea/DescriptionTextArea";
import CountrySelect from "../baseUiWrapper/countrySelect/CountrySelect";
import { selectValues } from "../../../interfaces/viewModel/selectValues";
import BaseGroupCheckBox from "../baseUi/BaseGroupCheckBox";
import { checkBoxValues } from "../../../interfaces/viewModel/checkBoxNotificationValues";
import MyHeader from "../header/MyHeader";
import { radioButtonValues } from "../../../interfaces/viewModel/radioButtonNotificationValues";
import BaseGroupRadioButton from "../baseUi/BaseGroupRadioButton";
import BaseInputFiles from "../baseUi/BaseInputFiles";
import UIinput from "../baseUiWrapper/input/UIinput";
import { makeServer } from "../../../shared/service/server";
import Spinner from "react-bootstrap/Spinner";
import UItable from "../table/UITable";

const server = makeServer();

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
    notificationCheckBox: [],
    notificationRadio: 0,
    files: [],
  });

  const [formError, setFormError] = useState({
    nome: false,
    cognome: false,
    telefono: false,
    email: false,
    descrizione: false,
    paese: false,
    notificationCheckBox: false,
    notificationRadio: false,
    files: false,
  });

  const [user, setUser] = useState([]);

  const [alert, setAlert] = useState(false);
  const [errore, setErrore] = useState(false);
  const [spinner, setSpinner] = useState(false);

  // al submit del button
  const handleValidForm = async (event: React.FormEvent) => {
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
      setAlert(false);
      try {
        setSpinner(true);
        setErrore(false);
        const response = await fetch("/api/utente", {
          method: "POST",
          body: JSON.stringify({ form }),
        });

        if (response.ok) {
          setAlert(true);
          const user = await response.json();
          console.log("User created:", user);
          setSpinner(false);
        } else {
          setErrore(true);
          console.error("Error creating user");
          setSpinner(false);
        }
      } catch (error) {
        setErrore(true);
        console.error("Error creating user", error);
        setSpinner(false);
      }
    }
  };

  function valida() {
    if (
      form.cognome === "" ||
      form.nome === "" ||
      form.telefono === "" ||
      form.email === "" ||
      form.paese === 0 ||
      form.notificationRadio === 0 ||
      spinner
    ) {
      return true;
    } else {
      return false;
    }
  }

  async function showTable() {
    setSpinner(true);
    console.log("show table");
    try {
      const response = await fetch("/api/utenti", {
        method: "GET",
      });

      if (response.ok) {
        setSpinner(false);
        const json = await response.json();
        setUser(json.users);
        console.log("Users shown:", user);
      } else {
        setSpinner(false);
        setErrore(true);
        console.error("Error fetching users");
      }
    } catch (error) {
      setSpinner(false);
      setErrore(true);
      console.error("Error fetching users", error);
    }
  }

  return (
    <>
      <div className="content container">
        <MyHeader
          text="Profilo"
          paragraf="Questo è un esempio di form creato con React, puoi compilarlo e validarlo."
        ></MyHeader>
        <form onSubmit={handleValidForm}>
          <div className="form--row">
            <UIinput
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
            ></UIinput>
          </div>
          <div className="form--row">
            <UIinput
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
            ></UIinput>
          </div>
          <div className="form--row">
            <UIinput
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
            ></UIinput>
          </div>
          <div className="form--row">
            <UIinput
              type="text"
              labelname="Email*"
              id="email"
              stile="color-red"
              error={formError.email}
              errormessage={formError.email ? "Formato email invalido" : ""}
              value={form.email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const val = event.target.value;
                setForm({ ...form, email: val });
                setAlert(false);
              }}
            ></UIinput>
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
          <MyHeader
            text="Notifiche"
            paragraf=" Puoi selezionare le check box e un radio button, oltre a poter caricare dei files."
          ></MyHeader>
          <div className="padding--top">
            <BaseGroupCheckBox
              title="Per Email"
              values={checkBoxValues}
              onChange={(selected: any) => {
                setForm({ ...form, notificationCheckBox: selected });
                setAlert(false);
              }}
            ></BaseGroupCheckBox>
          </div>
          <div className="padding--top">
            <BaseGroupRadioButton
              name="radioButton"
              title="Ricevi notifiche*"
              values={radioButtonValues}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const val = parseInt(event.target.value);
                setForm({ ...form, notificationRadio: val });
                setAlert(false);
              }}
            ></BaseGroupRadioButton>
          </div>
          <div className="padding--top">
            <BaseInputFiles
              id="myFile"
              label="Aggiungi dei file"
              onAddFile={(files: []) => {
                setForm({ ...form, files: files });
                setAlert(false);
              }}
            ></BaseInputFiles>
          </div>
          {alert && (
            <Alert
              style={{ marginTop: "20px" }}
              key={"success"}
              variant={"success"}
            >
              Submitted!
            </Alert>
          )}
          {errore && (
            <Alert
              style={{ marginTop: "20px" }}
              key={"danger"}
              variant={"danger"}
            >
              Errore!
            </Alert>
          )}
          <div className="container--stepform-button">
            <div style={{ marginTop: "10px" }}>
              {!spinner && (
                <MyFormButton
                  disable={valida()}
                  type="submit"
                  titolo="Valida"
                ></MyFormButton>
              )}
              {spinner && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              {!spinner && alert && (
                <button
                  type="button"
                  onClick={showTable}
                  style={{
                    backgroundColor: "#0d6efd",
                    color: "white",
                    marginLeft: "5px",
                  }}
                >
                  Mostra tabella dati
                </button>
              )}
            </div>
          </div>
          <div className="homepage--box">{user.length > 0 && table(user)}</div>
          {/*           <UItable data={user}></UItable>
           */}
          {/* <MyDebuggerObj
            className="mt-3"
            obj={form}
            submitted={alert}
          ></MyDebuggerObj> */}
        </form>
      </div>
    </>
  );
}

export default MyCustomFormBase;
function table(user: never[]) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Cognome</th>
          <th scope="col">Telefono</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {user.map((data: any) => {
          const rows = (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.form.nome}</td>
              <td>{data.form.cognome}</td>
              <td>{data.form.telefono}</td>
              <td>{data.form.email}</td>
              <td></td>
            </tr>
          );
          return rows;
        })}
      </tbody>
    </table>
  );
}
