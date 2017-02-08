# Sample application using React and Redux

## Run Application
Application was deployed using surge.sh and is hosted at http://benjamin-nwaneampeh.surge.sh
## DEV
Developed on Windows, so setting of environment variables will need to be changed on a MAC
### Install
`npm install`
### Start
`npm start`
### Test
`npm test`

## Notes
### Not complete
- Didn't finish storing the user preference to local storage.

### Additional things to do
- write some more unit tests
- add eslint to the project
- `index.html` is currently in `build` folder. Need to move it out and put it in the application root and have webpack copy it into the `build` folder
- don't commit `build` folder
- git hook to run unit tests and linting before pushing to git repo

### Assumptions
- A design is provided
- This application is part of a bigger application
- That no one else is working on the project, thus pushing straight to master
