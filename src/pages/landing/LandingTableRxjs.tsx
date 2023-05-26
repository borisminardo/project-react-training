import { useMemo } from "react";
import { UserProvider, useUser, User } from "../../shared/storage/storage";
import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import BaseInput from "../../components/atoms/baseUi/BaseInput";

const Stanza = () => {
  const { stanza$ } = useUser();
  const stanza = useObservableState(stanza$, []);
  return (
    <div className="padding--top--80">
      <h4>
        <strong>Stanza</strong>
      </h4>
      <div>
        {stanza.map((u: User) => {
          return (
            <div key={u.id} className="stanza--display">
              <div>{u.email}</div>
              <strong className="ml--5">
                {" "}
                {u.firstName} {u.lastName}
              </strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Search = () => {
  const { user$, selected$ } = useUser();
  const cerca$ = useMemo(() => new BehaviorSubject(""), []);

  const [filteredUsers] = useObservableState(
    () =>
      user$.pipe(
        combineLatestWith(cerca$),
        map(([user, cerca]) =>
          user.filter((u: User) =>
            u.firstName.toLowerCase().includes(cerca.toLowerCase())
          )
        )
      ),
    []
  );

  return (
    <div>
      <BaseInput
        labelname="Ricerca"
        errormessage=""
        type="text"
        value={cerca$.value}
        onChange={(e) => {
          cerca$.next(e.target.value);
        }}
      ></BaseInput>
      <div>
        <br />
        {filteredUsers.map((u: User) => {
          return (
            <div key={u.id} className="userRxjs--list">
              <hr />
              <input
                type="checkbox"
                checked={u.selected}
                onChange={() => {
                  if (selected$.value.includes(u.id)) {
                    selected$.next(
                      selected$.value.filter((id: number) => id !== u.id)
                    );
                  } else {
                    selected$.next([...selected$.value, u.id]);
                  }
                }}
              ></input>
              <strong style={{ marginLeft: "5px" }}>
                {u.firstName} {u.lastName}
              </strong>
              , {u.age} anni
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function LandingTableRxjs() {
  return (
    <UserProvider>
      <div className="landind--rxjs--page">
        <Search></Search>
        <Stanza></Stanza>
      </div>
    </UserProvider>
  );
}
