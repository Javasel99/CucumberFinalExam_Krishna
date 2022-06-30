$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Background.feature");
formatter.feature({
  "line": 3,
  "name": "TechFios Other Login Functionality validation",
  "description": "",
  "id": "techfios-other-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BackgroundFeature"
    }
  ]
});
formatter.before({
  "duration": 3221583600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to set sky blue background",
  "description": "",
  "id": "techfios-other-login-functionality-validation;user-should-be-able-to-set-sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User able see \"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User able to  click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to see background color change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 15
    }
  ],
  "location": "BackgroundStepDefination.user_able_see_button_exists(String)"
});
formatter.result({
  "duration": 3264705900,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefination.user_able_to_click_on_the_button()"
});
formatter.result({
  "duration": 3069014000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefination.user_should_able_to_see_background_color_change_to_sky_blue()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.before({
  "duration": 1860954300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should  be able to set white background",
  "description": "",
  "id": "techfios-other-login-functionality-validation;user-should--be-able-to-set-white-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User able see \"Set White Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User able to  click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should able to see background color change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Background",
      "offset": 15
    }
  ],
  "location": "BackgroundStepDefination.user_able_see_button_exists(String)"
});
formatter.result({
  "duration": 3103722700,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefination.user_able_to_click_on_the_button()"
});
formatter.result({
  "duration": 3088379300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefination.user_should_able_to_see_background_color_change_to_white()"
});
formatter.result({
  "duration": 37000,
  "status": "passed"
});
});