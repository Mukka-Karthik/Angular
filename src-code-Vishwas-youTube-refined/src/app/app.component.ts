import { Component, Input, OnInit, Output } from '@angular/core';
import { Service1Service } from './Service files/service1.service';

/* @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codeEvolution-Youtube-LearningPlatform-refined';
} */



@Component(
  {
    selector : "highSchool-component",
    templateUrl : "./HTML files/highSchoolFile1.html"
  }
)
export class HighSchool
{

}







@Component(
  {
    selector : "[firstComponent-selector]", //selectors using attribute
   // selector : "firstComponent-classAttribute",
    templateUrl : "./HTML files/FirstComponent.html"
  }
) // Meta Data is attached here in the form of decorator .. Here the component is attached to the class
export class FirstComponent
{

  public colleagueName : string = "Google and facebook";

  public windowObject = window.location.href;

  ClickConsoleMessages()
  {
    console.log("Messages arriving in console");
  }

  helloWorld()
  {
    console.log("Executing hello world function");
  }

  greetUser()
  {
    return "Displaying standard messages " + this.colleagueName;
  }

  propertyName1 : string = "displaying first property";

  disableHTMLElement = false;

}








@Component(
  {
  selector : "binding-selector",
  templateUrl : "./HTML files/BindingProperties.html",
  styleUrls : ["./CSS files/BindingFile1.css"],
  }
)
export class BindingProperties
{

  textSuccess_property = "text-success";
  textFailure_property = "text-failure";

  colorCode = true;


  //JSON object property not working
  JSONObject_bindProperty = //only true evaluated expressions work
  {
    textSuccess_property : this.colorCode,

    textFailure_property : !this.colorCode,

    // text-special : this.colorCode,

  }


}






@Component({

  selector : "styleBinding-selector",
  templateUrl : "./HTML files/StyleBinding.html",
  styleUrls : ["./CSS files/BindingFile1.css"],
}
)
export class StyleBinding_Component
{

  colorCode : string = "green";




hasError : boolean = true;
highlightColor : string = "yellow";

//programmer : string = " Value should reflect in template";

ifDirectiveVariable : boolean = false;


ngSwitchVariable_color : string = "green";

ngForDirective = ["red","green","gray","black","blue"];





public MultipleStyles : object =
{
    color : "green",
    fontSize : "20px",
    backgroundColor : "yellow",
    fontStyle : "italic"
}

eventHandler()
{
  console.log("Welcome to event handler method, u clicked on click event handler ");
}

listenEventHandlers(eventVariable : object)
{
  console.log("Logging all event listeners");
  console.log(eventVariable);

}


logMessage(InputValue : any)
{
  console.log(InputValue);
}



}







//Sending data between components



@Component({

  selector : "parent-selector",
  templateUrl : "./HTML files/ParentComponentFile1.html",
})
export class ParentComponent
{


}





@Component({

    selector : "child-selector",
    templateUrl : "./HTML files/childComponentFile1.html",
})
export class ChildComponent
{


}







//Working on pipes

@Component({
      selector : "pipes-selector",
      templateUrl : "./HTML files/PipesFile1.html",

})
export class PipesComponent
{


  name_pipes : string = "facebook Developer"

  name1_pipes : string = "welCOME to COde evolution"


  json1_pipe : object =
  {
    firstName : "facebook",
    lastName : "Developer"
  }


  date_Pipe =  new Date();

}






//Working on dependency injection

@Component(
  {
    selector : "service-component",
    templateUrl : "./HTML files/ServicesFile1.html"
  }
)
export class ServicesComponent implements OnInit
{
  Country_Array : any = ["India","Germany","Australia","Oxford","France"];

  CitizenDetails : any = [
    {firstName :"Google" , lastName : "developer", Location : "Bangalore"},
    {firstName :"Facebook" , lastName : "tester", Location : "Mumbai"},
    {firstName :"Amazon" , lastName : "Marketing head", Location : "Delhi"},
    {firstName :"FlipKart" , lastName : "Board member", Location : "Chennai"}
  ];

  randomVariable : string = "";

  constructor(private InstanceVariable : Service1Service) //Service1Service this is found in Service file folder
  {

  }
  ngOnInit(): void {

    this.randomVariable = this.InstanceVariable.getConsoleLogs();

    console.log(this.randomVariable);

  }

}








// Working on routing navigation

/* export const routesPath =
[
   {path: "helloBangalore", Component : "BangaloreComponent"},
   {path: "helloPune", Component : "PuneComponent"},
   {path: "helloChennai", Component : "ChennaiComponent"},
   {path: "helloHyderabad", Component : "HyderabadComponent"},


]
 */






@Component(
  {
  selector: "empty-selector",
  templateUrl : "./HTML files/EmptyComponent.html",

  }

)
export class EmptyComponent
{

}







//Working on forms

@Component(
  {
    selector : "form1-selector",
    templateUrl :"./HTML files/formFile1.html",
    providers : [Service1Service]
  }
)
export class formComponent1
{




}
