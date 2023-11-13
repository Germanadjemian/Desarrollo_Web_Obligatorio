import Actividad from "./routes/Actividad";

class Cuenta {
  gmail: string;
  password: string;
  activities: Actividad[];
  propuestas: Actividad[][]

  constructor(gmail: string, password: string, activities: Actividad[] = [], propuestas: Actividad[][]=[]) {
    this.gmail = gmail;
    this.password = password;
    this.activities = activities;
    this.propuestas = propuestas;
  }
}

export default Cuenta;


