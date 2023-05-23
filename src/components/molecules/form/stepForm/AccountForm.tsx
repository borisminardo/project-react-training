import UIinput from "../../../atoms/baseUiWrapper/input/UIinput";

type AccountData = {
  email: string;
  password: string;
};

type UserFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};
export function AccountForm({ email, password, updateFields }: UserFormProps) {
  return (
    <>
      <h3>Account</h3>
      <UIinput
        required
        type="email"
        labelname="Email*"
        id="email"
        stile="color-red"
        errormessage={""}
        value={email}
        onChange={(e) => {
          updateFields({ email: e.target.value });
        }}
      ></UIinput>
      <UIinput
        required
        type="password"
        labelname="Password*"
        id="password"
        stile="color-red"
        errormessage={""}
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      ></UIinput>
    </>
  );
}
