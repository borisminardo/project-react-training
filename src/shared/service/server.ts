import { createServer, Model, RestSerializer } from "miragejs";

interface User {
  id: string;
  nome: string;
  cognome: string;
  telefono: string;
  email: string;
  descrizione: string;
  paese: number;
  notificationCheckBox: [];
  notificationRadio: number;
  files: [];
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: RestSerializer,
    },
    models: {
      user: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;

      this.post("/utente", (schema, request) => {
        const attrs = JSON.parse(request.requestBody) as User;
        const user = schema.create("user", attrs);
        return user;
      });

      this.post("/stepForm", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const user = schema.create("user", attrs);
        return user;
      });
    },
  });

  return server;
}
