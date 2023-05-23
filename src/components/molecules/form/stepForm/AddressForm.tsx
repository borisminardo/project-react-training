import UIinput from "../../../atoms/baseUiWrapper/input/UIinput";

type AddressData = {
  via: string;
  citta: string;
  paese: string;
  cap: string;
};

type UserFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  via,
  citta,
  paese,
  cap,
  updateFields,
}: UserFormProps) {
  return (
    <>
      <h3>Indirizzo</h3>
      <UIinput
        required
        type="text"
        labelname="Via*"
        id="via"
        stile="color-red"
        errormessage={""}
        value={via}
        onChange={(e) => updateFields({ via: e.target.value })}
      ></UIinput>
      <UIinput
        required
        type="text"
        labelname="Città*"
        id="citta"
        stile="color-red"
        errormessage={""}
        value={citta}
        onChange={(e) => updateFields({ citta: e.target.value })}
      ></UIinput>
      <UIinput
        required
        type="text"
        labelname="Paese*"
        id="paese"
        stile="color-red"
        errormessage={""}
        value={paese}
        onChange={(e) => updateFields({ paese: e.target.value })}
      ></UIinput>
      <UIinput
        required
        min={1}
        type="number"
        labelname="Cap*"
        id="cap"
        stile="color-red"
        errormessage={""}
        value={cap}
        onChange={(e) => updateFields({ cap: e.target.value })}
      ></UIinput>
    </>
  );
}
