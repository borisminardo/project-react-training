export default function UItable({ dati }: any) {
  return (
    <div className="homepage--box">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {dati?.map((data: any) => {
            const rows = (
              <tr key={data.form.id}>
                <th scope="row">{data.form.id}</th>
                <td>{data.form.nome}</td>
                <td>{data.form.cognome}</td>
                <td>{data.form.telefono}</td>
                <td>{data.form.email}</td>
                <td></td>
              </tr>
            );
            return rows;
          })}
        </tbody>
      </table>{" "}
    </div>
  );
}
