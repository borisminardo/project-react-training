import { CountryValue } from "../viewModel/CountryValues";

export interface MyInputProps {
  labelname: string;
  errormessage: string;
  textHint?: string;
  [otherProps: string]: unknown;
}

export interface MySelectProps {
  labelname: string;
  errormessage: string;
  values: CountryValue[];
  [otherProps: string]: unknown;
}

export interface MyCheckboxProps {
  value: string;
  lableName: string;
  description: string;
  id: string;
  [otherProps: string]: unknown;
}

export type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TextAreaBaseProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type SelectBaseProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export type InputButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
