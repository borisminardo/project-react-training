import MyHeader from "../header/MyHeader";
import { useMultistepForm } from "../multiStepFormHook/useMultistepForm";
import MyFormButton from "../formButton/MyFormButton";
import { FormEvent } from "react";
import { UserForm } from "../../molecules/form/stepForm/UserForm";
import { AddressForm } from "../../molecules/form/stepForm/AddressForm";
import { AccountForm } from "../../molecules/form/stepForm/AccountForm";
import React from "react";
import { Alert } from "react-bootstrap";
import MyDebuggerObj from "../../../shared/debuggerPrinter/MyDebuggerObj";
import Spinner from "react-bootstrap/Spinner";

type FormData = {
  nome: string;
  cognome: string;
  eta: string;
  via: string;
  cap: string;
  citta: string;
  paese: string;
  email: string;
  password: string;
};

const INITIAL_STATE: FormData = {
  nome: "",
  cognome: "",
  eta: "",
  via: "",
  cap: "",
  citta: "",
  paese: "",
  email: "",
  password: "",
};

function MyStepFormBase() {
  const [form, setData] = React.useState(INITIAL_STATE);
  const [alert, setAlert] = React.useState(false);
  const [errore, setErrore] = React.useState(false);
  const [spinner, setSpinner] = React.useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...form} updateFields={updateFields} />,
      <AddressForm {...form} updateFields={updateFields} />,
      <AccountForm {...form} updateFields={updateFields} />,
    ]);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    setAlert(true);
    try {
      setSpinner(true);
      setErrore(false);
      const response = await fetch("/api/stepForm", {
        method: "POST",
        body: JSON.stringify({ form }),
      });

      if (response.ok) {
        setAlert(true);
        const user = await response.json();
        console.log("Step form created:", user);
        setSpinner(false);
      } else {
        setErrore(true);
        console.error("Error creating Step form");
        setSpinner(false);
      }
    } catch (error) {
      setErrore(true);
      console.error("Error creating Step form", error);
      setSpinner(false);
    }
  };
  return (
    <div className="content container">
      <MyHeader
        text="Step Form"
        paragraf="Questo è un esempio di Step Form creato con React, puoi scorrere, compilarlo e validarlo."
      ></MyHeader>
      <form onSubmit={onSubmit}>
        <div className="row--stepform">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        {alert && (
          <Alert
            style={{ marginTop: "20px" }}
            key={"success"}
            variant={"success"}
          >
            Submitted!
          </Alert>
        )}
        <div className="container--stepform-button">
          {!spinner && (
            <div style={{ marginTop: "10px" }}>
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  style={{ backgroundColor: "#0d6efd", color: "white" }}
                >
                  Indietro
                </button>
              )}
              {
                <MyFormButton
                  type="button"
                  marginLeft={!isFirstStep ? true : false}
                  disable={false}
                  titolo={isLastStep ? "Finito" : "Avanti"}
                ></MyFormButton>
              }
            </div>
          )}

          {spinner && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </form>
      {/* <MyDebuggerObj
        className="mt-3"
        obj={form}
        submitted={alert}
      ></MyDebuggerObj> */}
    </div>
  );
}
export default MyStepFormBase;
