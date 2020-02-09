$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "HepsiBurada Registering",
  "description": "",
  "id": "hepsiburada-registering",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User registers by successfully completing the registration form",
  "description": "",
  "id": "hepsiburada-registering;user-registers-by-successfully-completing-the-registration-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a web browser is at the Hepsiburada home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user click dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on the registration item",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user sees the registration form",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters the name",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the surname",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters the email",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click the agreement checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "driver close",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterStep.aWebBrowserIsAtTheHepsiburadaHomePage()"
});
formatter.result({
  "duration": 3673300287,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.theUserClickDropdown()"
});
formatter.result({
  "duration": 190774223,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userClicksOnTheRegistrationItem()"
});
formatter.result({
  "duration": 1910646297,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userSeesTheRegistrationForm()"
});
formatter.result({
  "duration": 16244,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userEntersTheName()"
});
formatter.result({
  "duration": 98786916,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userEntersTheSurname()"
});
formatter.result({
  "duration": 61511403,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userEntersTheEmail()"
});
formatter.result({
  "duration": 84600900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userEntersPassword()"
});
formatter.result({
  "duration": 254874565,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userClickTheAgreementCheckbox()"
});
formatter.result({
  "duration": 74604108,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userClickSubmitButton()"
});
formatter.result({
  "duration": 101441842,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.driverClose()"
});
formatter.result({
  "duration": 68046161,
  "status": "passed"
});
});