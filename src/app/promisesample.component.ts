import {Component} from "angular2/core";
import {Control, ControlGroup, Validators, FormBuilder} from "angular2/common";
import {LoginValidator} from "./login.validator";
import {Observable} from "rxjs/Rx";


/**
 * Form samples
 * Using form builder results in cleaner
 */
@Component({
    selector: "control-group",
    templateUrl: "app/promisesample.template.html",
})
export class PromiseSampleComponent {
  private title: string = "Simple form with Promises";
  public users =  [{id: 1, username: 'esnowden', email: 'ed@kgb.ru'},
              {id: 2, username: 'jassange', email: 'julian@gob.pe'}];
  private subscription;

   constructor () {

        console.log(new Observable());
        var clicks = Observable.fromEvent($("#submit"), "click");
        clicks.subscribe(function (data) {
            console.log("Button clicked");
        });

        console.log("Constructor was called");

        clicks.subscribe(data => console.log(data));

        var keydowns = Observable.fromEvent($("#login"), "keydown")
            .map(e => e.target.value);

        keydowns.subscribe(data => console.log(data));

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
     console.log($("#login").val());
   }
   /**
   * async call to server to check wether user exists
   */
   public checkLogin (login) {


   }

}
