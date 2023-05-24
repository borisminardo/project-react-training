import React, { useEffect } from "react";

export default function LandingTable() {
  const [data, setData] = React.useState({});
  /*   useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
      response.json();
      setData(response);
      console.log("data", data);
    });
  }; */

  const __DATA = [
    {
      userId: 1,
      id: 1,
      title: "Adriano",
      descrizione: "Pittore",
      occupazione: "Full time",
    },
    {
      userId: 2,
      id: 2,
      title: "Boris",
      descrizione: "Software Developer",
      occupazione: "Full time",
    },
    {
      userId: 3,
      id: 3,
      title: "Veronica",
      descrizione: "Software Developer",
      occupazione: "Full time",
    },
    {
      userId: 4,
      id: 4,
      title: "Alberto",
      descrizione: "Disoccupato",
      occupazione: "Free time",
    },
  ];
  return (
    <>
      <div className="homepage--box">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrizione</th>
              <th scope="col">Occupazione</th>
            </tr>
          </thead>
          <tbody>
            {__DATA.map((data) => {
              const rows = (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.title}</td>
                  <td>{data.descrizione}</td>
                  <td>{data.occupazione}</td>
                </tr>
              );
              return rows;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
