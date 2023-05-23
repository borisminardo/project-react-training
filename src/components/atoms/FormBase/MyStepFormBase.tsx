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
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    setAlert(true);
  }
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
            <MyFormButton
              type="button"
              marginLeft={!isFirstStep ? true : false}
              disable={false}
              titolo={isLastStep ? "Finito" : "Avanti"}
            ></MyFormButton>
          </div>
        </div>
      </form>
      <MyDebuggerObj
        className="mt-3"
        obj={form}
        submitted={alert}
      ></MyDebuggerObj>
    </div>
  );
}
export default MyStepFormBase;
