import { createContext, useContext } from "react";
import { BehaviorSubject, map, combineLatestWith } from "rxjs";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  selected: boolean;
}

interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Hair {
  color: string;
  type: string;
}

//chiama l'api rest e crea un subject con la risposta
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => list$.next(data.users));

//definisce un subject per la lista utenti
const list$ = new BehaviorSubject<User[]>([]);

//definisce un subject per gli id utenti selezionati
const selected$ = new BehaviorSubject<number[]>([]);

//combina i precedenti due subjects e tira fuori solo quelli selezionati
const user$ = list$.pipe(
  combineLatestWith(selected$),
  map(([user, selected]: any) =>
    user.map((u: User) => ({
      ...u,
      selected: selected.includes(u.id),
    }))
  )
);
//definisce un subject per la stanza
const stanza$ = user$.pipe(
  map((user: User[]) => user.filter((u) => u.selected))
);

const UserContext = createContext({
  user$,
  selected$,
  stanza$,
});

export const useUser = () => useContext(UserContext);
export const UserProvider: React.FunctionComponent = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        user$,
        selected$,
        stanza$,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
