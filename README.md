# NodeAmazonS3Upload

## Installation

Ensure Node is installed. This can be done through your package manager or from their [website](http://nodejs.org/).

Clone this repository:
```term
$ git clone https://github.com/noentiger/NodeAmazonS3Upload.git
```

Change directory into the application and use `npm` to install the application's dependencies:
```term
$ cd NodeAmazonS3Upload
$ npm install
$ npm run dev
```

## Running the application
* Set environment variables for your AWS access key, secret, and bucket name.
```term
$ S3_BUCKET = xxx AWSAccessKeyId = xxx AWSSecretKey = xxx
```
* Run `npm run dev`
* Server will [localhost:3000/upload](http://localhost:3000/upload) to try it out


## Deploying the application

See the article [Deploying with Git](https://devcenter.heroku.com/articles/git) for more detailed information on deploying to Heroku.

* Download and install the [Heroku toolbelt](https://toolbelt.heroku.com/)
* Commit your application to a local Git repository (e.g. `git init`, `git add .`, `git commit -m "version 1 commit"`, etc.)
* Create the application on Heroku by adding a Git remote (`$ heroku create`)
* Push your code to the new Heroku repo (`$ git push heroku master`)

* Or just use the button
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

* Set environment variables
```term
§ heroku config:set S3_BUCKET = xxx AWSAccessKeyId = xxx AWSSecretKey = xxx
```

## Licensing

The files in this repository are, unless stated otherwise, released under the Apache License. You are free to redistribute this code with or without modification. The full license text is available [here](http://www.apache.org/licenses/LICENSE-2.0).
