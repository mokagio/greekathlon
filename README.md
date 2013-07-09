#Unnamed-Mobile-Framework

##About
_TODO..._

##Components

###PhoneGap

We rely on [PhoneGap](http://phonegap.com/) to develop mobile platform using web technologies rather than going native. _Write once, run everywhere (sort of)_. PhoneGap itself relies on [Apache Cordova](http://cordova.apache.org/).

###CoffeeScript

We use [CoffeeScript](http://coffeescript.org/) to write our Javascript. Because it's 2013, and because we're somehow hipsters.

> CoffeeScript is a little language that compiles into JavaScript. 

###Less

We use [Less](http://lesscss.org/) to write our CSS. Because it's 2013, and because we're somehow hipsters. Twice.

> LESS extends CSS with dynamic behavior such as variables, mixins, operations and functions.


###Cake

We use [cake](http://jashkenas.github.io/coffee-script/documentation/docs/cake.html) to build the app.

> cake is a simplified version of Make (Rake, Jake) for CoffeeScript. You define tasks with names and descriptions in a Cakefile, and can call them from the command line, or invoke them from other tasks.

###Grunt

We use [Grunt](http://gruntjs.com/) to automate developmnet tasks.

##Setup of a new project

#####Step 1
Install `cordova`

	sudo npm install -g cordova
	
#####Step 2
Create a new cordova project

	cordova create HelloWorld com.example.hello "Hello World"
	
#####Step 3
Add the platforms you want to develop for

	cordova platform add ios
    cordova platform add android

####Step 4
_Some how get the Unnamed-Mobile-Framework_

####Step 5
_Setup the stuff needed_

####Step 6
Start coding!

##TODOs

* Finish this readme
* Give a shot to [Sass], in the `.sass` format, because it's even more minimal than Less.
* Give a shot to [Jade](http://jade-lang.com/), because… come on! Do we really still want to open and close tags in 2013?!