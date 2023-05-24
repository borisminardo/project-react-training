import React, { useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";

export default function LandingTable() {
  const [data, setData] = React.useState([
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
  ]);
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

  type User = {
    userId: number;
    id: number;
    title: string;
    descrizione: string;
    occupazione: string;
  };

  const deleteItem = (id: number) => {
    setData((item) => {
      return item.filter((item) => item.id !== id);
    });
  };
  const openDetail = (data: User) => {
    alert(JSON.stringify(data, null, 2));
  };

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
              <th scope="col">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              const rows = (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.title}</td>
                  <td>{data.descrizione}</td>
                  <td>{data.occupazione}</td>
                  <td>
                    <Button onClick={() => openDetail(data)}>
                      <AiOutlineEdit />
                    </Button>
                    <Button
                      onClick={() => deleteItem(data.id)}
                      style={{ marginLeft: "5px" }}
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
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
