import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Contact from "../Class/Contact/contact.component";

const baseURL = "http://localhost:3000";

@Injectable()
export default class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(baseURL + "/user");
  }

  createUser(data: Contact) {
    return this.http.post(baseURL + "/user", data);
  }

  updateUser(id: string, data: Contact) {
    return this.http.put(baseURL + `/user/${id}`, data);
  }

  deleteUser(id: string) {
    return this.http.delete(baseURL + `/user/${id}`);
  }
}
