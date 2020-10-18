# Node Express MongoDB

Getting Started with Express.js

## Objective

Cover the following topics using Node, Express and MongoDB:

<ul>
	<li>Getting Express Up and Running<br/></li>
	<li>Routing Basics<br/></li>
	<li>Template Engines<br/></li>
	<li>Static Files<br/></li>
	<li>HTTP Verbs<br/></li>
	<li>Advanced Routing<br/></li>
	<li>Routing Code Organization<br/></li>
	<li>Using Streams<br/></li>
	<li>Middleware<br/></li>
	<li>MongoDB Integration<br/></li>
	<li>Mongoose and MongoDB</li>
</ul>

## Solution

This has an express js server waiting on port 3000

Check out [express website](http://expressjs.com/en/resources/middleware.html) for third-party middleware for Express<br/>
```app.get``` statements utilize application level middleware<br/>
```router.get``` statements utilize router level middleware

## Installation

Install packages:
```
npm install
```
Install MongoDb with brew:<br/>
Check out [brew website](http://brew.sh) for more information.<br/>
Paste this at a terminal prompt to install brew.
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install MongoDB with brew:
```
brew install mongodb
```

Have launchd start mongodb now and restart at login:
```
brew services start mongodb
```

Import user_list.json into mongodb:<br/>
database name: test<br/>
collection name: user<br/>
drop the collection if necessary<br/>
use user_list.json file to get the data
```
mongoimport --db test --collection users --drop --file user_list.json
```

Check out [mongoose](http://mongoosejs.com) ORM for Node and MongoDB.

## Usage

```
npm run dev 
```

Navigate to `http://localhost:3000`
