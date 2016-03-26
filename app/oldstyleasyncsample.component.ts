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
  private title: string = "Simple form with OnSubmit Validation";
  public form: ControlGroup;

   constructor (formBuilder: FormBuilder) {
     // Array with properties for each field:
     // default value and validator function
     this.form = formBuilder.group({
       login: ["", Validators.compose([
                                      Validators.required,
                                      LoginValidator.cannotContainInvalidCharacters
              ])],
       password: ["", Validators.required],
       password2: ["", Validators.required]
     });

   }
    public signup () {
      // For login with a server side check using a service
      // var result = signUpService.checkLogin(this.form.value);
      /*
        if (result) {
        this.form.find('login').setErrors({
          loginExists: true;
        });
      }
      */
      if (this.form.find("login").value === "admin" ) {
        this.form.find("login").setErrors({
          loginExists: true
        });
      }
      if (this.form.find("password").value !== this.form.find("password2").value)
      this.form.find("password2").setErrors({
        passwordsDoNotMatch: true
      });
       console.log("Sending form");
        console.log(this.form.value);
    }

}
