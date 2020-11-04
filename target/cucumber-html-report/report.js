$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegPlusAuth.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 2,
  "name": "Authorization on the platform",
  "description": "",
  "id": "authorization-on-the-platform",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Successful registration on the platform",
  "description": "",
  "id": "authorization-on-the-platform;successful-registration-on-the-platform",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@success"
    },
    {
      "line": 7,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter valid login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter valid confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter valid email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter valid auth email",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter valid auth password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I press submit sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I press alert button",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "authorization-on-the-platform;successful-registration-on-the-platform;",
  "rows": [
    {
      "cells": [
        "login",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 20,
      "id": "authorization-on-the-platform;successful-registration-on-the-platform;;1"
    },
    {
      "cells": [
        "random",
        "random",
        "Qwerty!123",
        "Qwerty!123"
      ],
      "line": 21,
      "id": "authorization-on-the-platform;successful-registration-on-the-platform;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2570721646,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 98463649,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful registration on the platform",
  "description": "",
  "id": "authorization-on-the-platform;successful-registration-on-the-platform;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@success"
    },
    {
      "line": 7,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter valid login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter valid password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter valid confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter valid email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter valid auth email",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter valid auth password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I press submit sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I press alert button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterValidLogin(String)"
});
formatter.result({
  "duration": 283977841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 202889333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.iEnterValidConfirmPassword(String)"
});
formatter.result({
  "duration": 187757582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 206400447,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 178198289,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iEnterValidAuthEmail()"
});
formatter.result({
  "duration": 2311734903,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iEnterValidAuthPassword()"
});
formatter.result({
  "duration": 187635710,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitSignInButton()"
});
formatter.result({
  "duration": 188077126,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressAlertButton()"
});
formatter.result({
  "duration": 11748277,
  "status": "passed"
});
formatter.after({
  "duration": 85497365,
  "status": "passed"
});
formatter.uri("Register.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 2,
  "name": "Registration on the platform",
  "description": "",
  "id": "registration-on-the-platform",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Successful registration on the platform",
  "description": "",
  "id": "registration-on-the-platform;successful-registration-on-the-platform",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@success"
    },
    {
      "line": 7,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter valid login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter valid confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter valid email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter the main platform page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "registration-on-the-platform;successful-registration-on-the-platform;",
  "rows": [
    {
      "cells": [
        "login",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 16,
      "id": "registration-on-the-platform;successful-registration-on-the-platform;;1"
    },
    {
      "cells": [
        "random",
        "random",
        "Qwerty!123",
        "Qwerty!123"
      ],
      "line": 17,
      "id": "registration-on-the-platform;successful-registration-on-the-platform;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1900654145,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 19782,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful registration on the platform",
  "description": "",
  "id": "registration-on-the-platform;successful-registration-on-the-platform;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@success"
    },
    {
      "line": 7,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter valid login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter valid password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter valid confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter valid email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter the main platform page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterValidLogin(String)"
});
formatter.result({
  "duration": 266590224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 202234397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.iEnterValidConfirmPassword(String)"
});
formatter.result({
  "duration": 189103648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 217460302,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 168710648,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iEnterTheMainPlatformPage()"
});
formatter.result({
  "duration": 1635750589,
  "status": "passed"
});
formatter.after({
  "duration": 80433748,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Unsuccessful registration with invalid min login",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@failed"
    },
    {
      "line": 20,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter invalid min login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter valid confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter valid email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-login;",
  "rows": [
    {
      "cells": [
        "login",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 29,
      "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-login;;1"
    },
    {
      "cells": [
        "random",
        "random",
        "Qwerty!123",
        "Qwerty!123"
      ],
      "line": 30,
      "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1613234891,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 18734,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Unsuccessful registration with invalid min login",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@failed"
    },
    {
      "line": 20,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter invalid min login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter valid password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter valid confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter valid email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.iEnterInvalidLogin(String)"
});
formatter.result({
  "duration": 270031708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 196161923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.iEnterValidConfirmPassword(String)"
});
formatter.result({
  "duration": 184161024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 210169546,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 165022421,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2008587679,
  "status": "passed"
});
formatter.after({
  "duration": 76610564,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Unsuccessful registration with invalid max login",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@failed"
    },
    {
      "line": 33,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I enter invalid max login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter valid confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter valid email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-login;",
  "rows": [
    {
      "cells": [
        "login",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 42,
      "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-login;;1"
    },
    {
      "cells": [
        "random",
        "random",
        "Qwerty!123",
        "Qwerty!123"
      ],
      "line": 43,
      "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1926126207,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 10521,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Unsuccessful registration with invalid max login",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@failed"
    },
    {
      "line": 33,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I enter invalid max login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter valid password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter valid confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter valid email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.iEnterInvalidMaxLogin(String)"
});
formatter.result({
  "duration": 298662011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 206538029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.iEnterValidConfirmPassword(String)"
});
formatter.result({
  "duration": 192289113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 199698773,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 166116105,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2009649801,
  "status": "passed"
});
formatter.after({
  "duration": 76168885,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "Unsuccessful registration with empty fields",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@failed"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I enter empty login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "Data",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data",
  "rows": [
    {
      "cells": [
        "login",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 54,
      "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        ""
      ],
      "line": 55,
      "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;2"
    },
    {
      "cells": [
        "",
        "random",
        "Qwerty!123",
        "Qwerty!123"
      ],
      "line": 56,
      "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;3"
    },
    {
      "cells": [
        "random",
        "",
        "Qwerty!123",
        "Qwerty!123"
      ],
      "line": 57,
      "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;4"
    },
    {
      "cells": [
        "random",
        "random",
        "",
        "Qwerty!123"
      ],
      "line": 58,
      "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;5"
    },
    {
      "cells": [
        "random",
        "random",
        "Qwerty!123",
        ""
      ],
      "line": 59,
      "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1987783310,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 10867,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Unsuccessful registration with empty fields",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@failed"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I enter empty login \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I enter password \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter confirm password \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter email \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterEmptyLogin(String)"
});
formatter.result({
  "duration": 250723907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "MyStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 191488311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 180282099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 197480647,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 161217363,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2006424033,
  "status": "passed"
});
formatter.after({
  "duration": 82781108,
  "status": "passed"
});
formatter.before({
  "duration": 1831123416,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 12448,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Unsuccessful registration with empty fields",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@failed"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I enter empty login \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I enter password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterEmptyLogin(String)"
});
formatter.result({
  "duration": 247686159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 18
    }
  ],
  "location": "MyStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 221085292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 191267366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 206331902,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 176690741,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2007768227,
  "status": "passed"
});
formatter.after({
  "duration": 88606904,
  "status": "passed"
});
formatter.before({
  "duration": 1690483763,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 10330,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Unsuccessful registration with empty fields",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@failed"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I enter empty login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I enter password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter email \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterEmptyLogin(String)"
});
formatter.result({
  "duration": 266098616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 18
    }
  ],
  "location": "MyStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 234439409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 185825958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 199184025,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 176168433,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2009964160,
  "status": "passed"
});
formatter.after({
  "duration": 79948090,
  "status": "passed"
});
formatter.before({
  "duration": 1910660495,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 11063,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Unsuccessful registration with empty fields",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@failed"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I enter empty login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I enter password \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterEmptyLogin(String)"
});
formatter.result({
  "duration": 276628688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "MyStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 188906786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 180219305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 214057252,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 188576153,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2009109339,
  "status": "passed"
});
formatter.after({
  "duration": 84362169,
  "status": "passed"
});
formatter.before({
  "duration": 2078617558,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 22449,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Unsuccessful registration with empty fields",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-empty-fields;data;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@failed"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I enter empty login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I enter password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter confirm password \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterEmptyLogin(String)"
});
formatter.result({
  "duration": 319294260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 18
    }
  ],
  "location": "MyStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 202292134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 187408349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 225894864,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 187769291,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2007554202,
  "status": "passed"
});
formatter.after({
  "duration": 84468489,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "Unsuccessful registration with invalid min email",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@failed"
    },
    {
      "line": 61,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "I enter valid login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter valid confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I enter invalid min email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-email;",
  "rows": [
    {
      "cells": [
        "login",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 70,
      "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-email;;1"
    },
    {
      "cells": [
        "random",
        "random",
        "Qwerty!123",
        "Qwerty!123"
      ],
      "line": 71,
      "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2015905156,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 10258,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Unsuccessful registration with invalid min email",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-min-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@failed"
    },
    {
      "line": 61,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "I enter valid login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I enter valid password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter valid confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I enter invalid min email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterValidLogin(String)"
});
formatter.result({
  "duration": 270827424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 189754134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.iEnterValidConfirmPassword(String)"
});
formatter.result({
  "duration": 187704644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.iEnterInvalidMinEmail(String)"
});
formatter.result({
  "duration": 191368786,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 175613888,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2006933648,
  "status": "passed"
});
formatter.after({
  "duration": 79446550,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 75,
  "name": "Unsuccessful registration with invalid max email",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@failed"
    },
    {
      "line": 74,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "I enter valid login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter valid confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I enter invalid max email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.examples({
  "line": 82,
  "name": "",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-email;",
  "rows": [
    {
      "cells": [
        "login",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 83,
      "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-email;;1"
    },
    {
      "cells": [
        "random",
        "random",
        "Qwerty!123",
        "Qwerty!123"
      ],
      "line": 84,
      "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2106776143,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Registration page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.registrationPageIsOpen()"
});
formatter.result({
  "duration": 17608,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Unsuccessful registration with invalid max email",
  "description": "",
  "id": "registration-on-the-platform;unsuccessful-registration-with-invalid-max-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@failed"
    },
    {
      "line": 74,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "I enter valid login \"random\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I enter valid password \"Qwerty!123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter valid confirm password \"Qwerty!123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I enter invalid max email \"random\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I press submit button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.iEnterValidLogin(String)"
});
formatter.result({
  "duration": 276110710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 252366269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty!123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.iEnterValidConfirmPassword(String)"
});
formatter.result({
  "duration": 201406869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.iEnterInvalidMaxEmail(String)"
});
formatter.result({
  "duration": 222549522,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iPressSubmitButton()"
});
formatter.result({
  "duration": 166564080,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iStayOnTheSamePage()"
});
formatter.result({
  "duration": 2008520634,
  "status": "passed"
});
formatter.after({
  "duration": 82512795,
  "status": "passed"
});
});