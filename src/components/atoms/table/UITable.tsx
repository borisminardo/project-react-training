type ChildComponentProps = {
  data: string[];
};
export const UItable: React.FC<ChildComponentProps> = ({ data }) => {
  return (
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
        {data?.map((data: any) => {
          const rows = (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
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
    </table>
  );
};
