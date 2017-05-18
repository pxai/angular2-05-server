import {Component} from "angular2/core";
import {Control, ControlGroup, Validators, FormBuilder} from "angular2/common";
import {LoginValidator} from "./login.validator";
import {Observable} from "rxjs/Rx";

// Optimal way to get just what we need:
// import {Observable} from "rxjs/Rx";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/debounceTime";

/**
* Using Observable. Observables let us to subscribe to a flow
* of events or data
*/
@Component({
    selector: "control-group",
    templateUrl: "app/observablesample.template.html",
})
export class ObservableSampleComponent {
  private title: string = "Simple form with Observable async query";
  public users =  [{id: 1, username: 'esnowden', email: 'ed@kgb.ru'},
              {id: 2, username: 'jassange', email: 'julian@gob.pe'}];
  public form: ControlGroup;
  private subscription;

   constructor (formBuilder: FormBuilder) {

     this.form = formBuilder.group({
       login: ["", Validators.required]
     });

        console.log(new Observable());
        var clicks = Observable.fromEvent($("#submit"), "click");
        clicks.subscribe(function (data) {
            console.log("Button clicked");
        });

        var keyups = Observable.fromEvent($("#login"), "keyup")
          .map(e => e.target.value)   // map data to change it to objecto to string
          .filter(text => text.length >= 3) // applies a filter
          .debounce(1000)   // apply some delay
          .distinctUntilChanged() // don't do anything unless changes were made
          .flatMap(searchTerm => {  // flat map, to get data instead a bunch of observables
          //.map (searchTerm => {   // finally we call the server
              var url = "http://localhost:3000/api/users";
              // when the json response is ready, it will feed the observable
              var promise = $.getJSON(url);
              // We return an Observable
              return Observable.fromPromise(promise);
          });

          // arrow expression o lamda function
          this.subscription = keyups.subscribe(data => console.log(data));

      /*
      var keyups = Observable.fromEvent($("#login"), "keyup");
      // anonymous function mode
      keyups.subscribe(function (data) {
            console.log(data);
        });
        // arrow expression o lamda function
        keyups.subscribe(data => console.log(data));
        */
   }

   /**
   * cancel subscription to observable
   */
   public cancelSubscription () {
     console.log("Subscription canceled");
     this.subscription.unsubscribe();
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
