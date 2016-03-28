import {Http} from "angular2/http";
import "rxjs/add/operator/map";
import { Injectable } from "angular2/core";
import {User} from "./user";
/**
* http gets injected through the constructor argument
* don't forget to tell the injector in any component we use
* using the providers..
*/
@Injectable()
export class UserService {
  private http: Http;
  constructor (http: Http) {
    this.http = http;
  }

  // Could be : Observable <User[]>  to get intellisense
  public getUsers() {
    // we subscribe to an observable, when data is ready
    // we push data to the component. this will be a consumer

    // We expose only data using map operator, that must be imported
      return this.http.get("http://localhost:3000/api/users/")
      .map(result => result.json());
    }

  public save(user: User) {
    return this.http.post("http://localhost:3000/api/user/save", JSON.stringify(user))
        .map(result => result.json());
  }

  public update(user) {
    this.http.put("http://localhost:3000/api/user/update",JSON.stringify(user))
        .map(result => result.json());
  }

  public delete(id) {
    this.http.put("http://localhost:3000/api/user/delete/","");
  }

}
