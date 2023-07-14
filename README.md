Release Notes

Milestone 2:
Still need to develop CSS, but we have most of our inputs developed. The login information is being saved in the session but we need to send it to a database instead. Started a new page for requesting access.

There are now two more boxes to input times and city. Right now you can input whatever you would like into the text boxes, but we would like to limit this to Omaha, Lincoln, and Council Bluffs, either by text input exception or using buttons. 

The Register page which allows the user to register a guest or manager account. This works, but the backend server has not been installed so the app does not remember the credentials. (Can be improved in Milestone 3)

The Login page which should allow users to login, however, the backend has yet to be installed and can be improved in Milestone 3.

Libraries Installed:
npm install react
npm install react-router-dom
npm install react-toastify
npm install axios

To test the code run: 'npm start' in the event-finder folder

To use the build enter the following commands in the terminal(Preferably VSCode):
npm install -g serve,
serve -s build
