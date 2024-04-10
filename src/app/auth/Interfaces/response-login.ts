import { User } from "./user";

export interface ResponseLogin {
  status : boolean,
  message : string,
  data : {user : User,token : string}
}
