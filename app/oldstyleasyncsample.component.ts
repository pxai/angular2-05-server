import {Component} from "angular2/core";
import {Control, ControlGroup, Validators, FormBuilder} from "angular2/common";
import {LoginValidator} from "./login.validator";


/**
 * Form samples
 * Using form builder results in cleaner
 */
@Component({
    selector: "control-group",
    templateUrl: "app/oldstyleasyncsample.template.html",
})
export class OldStyleAsyncSampleComponent {
  private title: string = "Simple search form with Async call";
  public form: ControlGroup;
  public users =  [{id: 1, username: 'esnowden', email: 'ed@kgb.ru'},
              {id: 2, username: 'jassange', email: 'julian@gob.pe'}];

   constructor (formBuilder: FormBuilder) {
     // Array with properties for each field:
     // default value and validator function
     this.form = formBuilder.group({
       login: ["", Validators.required]
     });

   }

   /**
   * async call to server to check wether user exists
   */
   public checkLogin (login) {
     console.log("Checking login...");
     this.users = [];
     var url = "http://localhost:3000/api/users";
     $.getJSON(url, function(userdata){
        console.log(userdata);
        this.users = userdata.data;
     });
     return this.users;
   }

    public signup () {
      if (this.form.find("login").value === "admin" ) {
        this.form.find("login").setErrors({
          loginExists: true
        });
      }

       console.log("Sending form");
        console.log(this.form.value);
    }

}
