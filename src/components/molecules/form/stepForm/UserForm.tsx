import UIinput from "../../../atoms/baseUiWrapper/input/UIinput";

type UserData = {
  nome: string;
  cognome: string;
  eta: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({ nome, cognome, eta, updateFields }: UserFormProps) {
  return (
    <>
      <h3>Utente</h3>
      <UIinput
        required
        type="text"
        labelname="Nome*"
        id="nome"
        stile="color-red"
        errormessage={""}
        value={nome}
        onChange={(e) => updateFields({ nome: e.target.value })}
      ></UIinput>
      <UIinput
        required
        type="text"
        labelname="Cognome*"
        id="cognome"
        stile="color-red"
        errormessage={""}
        value={cognome}
        onChange={(e) => updateFields({ cognome: e.target.value })}
      ></UIinput>
      <UIinput
        required
        min={1}
        type="number"
        labelname="Età*"
        id="eta"
        stile="color-red"
        errormessage={""}
        value={eta}
        onChange={(e) => updateFields({ eta: e.target.value })}
      ></UIinput>
    </>
  );
}
