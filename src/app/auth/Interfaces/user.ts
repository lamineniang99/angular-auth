import { Dm } from "./dm";

export interface User {
  _id: string;
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  email: string;
  password: string;
  role: string;
  dms: Dm;
  activated: boolean;
  __v: number;
}
