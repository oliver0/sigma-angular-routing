var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/orange' ,{
      templateUrl: '/views/templates/orange.html',
      controller: 'OrangeController',
      controllerAs: 'orange'
    })
    .when('/white', {
      templateUrl: '/views/templates/white.html',
      controller: 'WhiteController',
      controllerAs: 'white'
    })
    .when('/blonde', {
      templateUrl: '/views/templates/blonde.html',
      controller: 'BlondeController',
      controllerAs: 'blonde'
    })
    .when('/pink', {
      templateUrl: '/views/templates/pink.html',
      controller: 'PinkController',
      controllerAs: 'pink'
    })
    .when('/brown', {
      templateUrl: '/views/templates/brown.html',
      controller: 'BrownController',
      controllerAs: 'brown'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.image = "../images/reservoirDogsPaint.png";

});

app.controller('OrangeController', function() {
  console.log('orange controller running');
  var self = this;
  var code = true;
  var real = false;
  self.title = "Mr. Orange";
  self.realName = "Freddy Newandyke";
  self.image = "../images/mrOrange.jpg";
  self.bio = "Mr Orange is an undercover cop for the Los Angeles Police Department. He is " +
              "tasked with arresting L.A. crime boss Joe Cabot, and to do this, he has to pretend " +
              "he is a criminal and be accepted into Cabot's gang. How far will he go to sell the lie?";
  self.quote = "You're not blind, you've just got blood in your eyes.";

});

app.controller('WhiteController', function() {
  console.log('white controller running');
  var self = this;
  self.title = "Mr. White";
  self.image = "../images/mrWhite.jpg";
  self.bio = "Mr. White is a long time friend of Los Angeles crime boss Joe Cabot and his son," +
              "'Nice Guy' Eddie Cabot. Joe Cabot informed Mr. White of a telegram about a diamond heist," +
              "which he accepted. Mr. White may be the last honorable thief. Commendable, " +
              "but some might say it's the surest way to an early grave...";
  self.realName = "Lawrence Dimick";
  self.quote="Joe, you're making a terrible mistake. I'm not gonna let you make it."
});

app.controller('BlondeController', function() {
  console.log('blonde controller running');
  var self = this;
  self.title = "Mr. Blonde";
  self.image = "../images/mrBlonde.jpg";
  self.bio = 'Mr Blonde is a close friend of Los Angeles crime boss Joe Cabot, and his son ' +
              '"Nice Guy" Eddie Cabot. He is offered a diamond heist by the Cabots which he gladly ' +
              'accepted. A little too gladly...';
  self.realName = 'Victor "Vic" Vega';
  self.quote="Are you gonna bark all day, little doggy, or are you gonna bite?";
});

app.controller('PinkController', function() {
  console.log('pink controller running');
  var self = this;
  self.title = "Mr. Pink";
  self.image = "../images/mrPink.jpg";
  self.bio = "Mr Pink was hired by Joe Cabot and his son, Nice Guy Eddie. When given his codename, " +
              "he is sensetive of the color have is given: pink. He also decides to make a huge fuss " +
              "about tipping the waitress. To say he's not everyone's favortie guy is an understatement.";
  self.realName = 'Unknown';
  self.quote = "I don't wanna kill anybody. But if I gotta get out that door, and you're standing in " +
                "my way, one way or the other, you're gettin' outta my way.";

});

app.controller('BrownController', function() {
  console.log('brown controller running');
  var self = this;
  self.title = "Mr. Brown";
  self.image = "../images/mrBrown.jpg"
  self.bio = "Before the heist, Brown was hired by Joe Cabot, an elderly crime " +
              "boss, and his son 'Nice Guy Eddie' Cabot. He posesses a foul mouth " +
              "that loves to hear itself yap, making it somewhat challenging to find " +
              "a usable quote...";
  self.realName = 'Unknown';
  self.quote = " I'm blind, man. I'm f***ing blind! "

});
