import { useEffect, useState, useMemo } from "react";
import { User, list$ } from "../../shared/storage/storage";
import BaseInput from "../../components/atoms/baseUi/BaseInput";

const Search = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const sub = list$.subscribe(setUser);
    return () => sub.unsubscribe();
  }, []);

  const filteredUsers = useMemo(() => {
    return user.filter((u) =>
      u.firstName.toLowerCase().includes(search.toLowerCase())
    );
  }, [user, search]);

  return (
    <div style={{ padding: "40px" }}>
      <BaseInput
        labelname="Ricerca"
        errormessage=""
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></BaseInput>
      <div>
        <br />
        {filteredUsers.map((u: any) => {
          return (
            <div key={u.id}>
              <hr />
              <strong>
                {" "}
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
  return <Search></Search>;
}
