import {Component} from "angular2/core";
import {Control, ControlGroup, Validators, FormBuilder} from "angular2/common";
import {LoginValidator} from "./login.validator";
import {UserService} from "./user.service";
// al functions for http services
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/core";


// Optimal way to get just what we need:
// import {Observable} from "rxjs/Rx";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/debounceTime";

/**
* Using a service to take care of the server interaction
* Tyry to use lifecycle hooks for better practices:
OnInit (first instantiated), OnDestroy, DoCheck, OnChanges
AfterContentInit, AftercontentChecked, AfterViewInit, AfterViewChecked
*/
@Component({
    selector: "control-group",
    templateUrl: "app/httpsample.template.html",
    providers: [UserService, HTTP_PROVIDERS]
})
export class HttpSampleComponent implements OnInit {
  private title: string = "Simple form with Observable async query";
  public users;
  public form: ControlGroup;
  private subscription;
  private userService: UserService;

   constructor (formBuilder: FormBuilder, userService: UserService) {

     this.userService = userService;
     this.form = formBuilder.group({
       login: ["", Validators.required]
     });

     this.userService.save({id: 5, username: "ts", email: "change@me"}).
      subscribe(user => console.log(user));
   }

   /**
   * called after the constructor, need to implement
   * because of the interface
   */
   public ngOnInit () {
     console.log("Calling ngOnInit");
        this.userService.getUsers().
           subscribe(users => console.log(users));
   }
   /**
   * async call to server to check wether user exists
   */
   public checkLogin (login) {


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
