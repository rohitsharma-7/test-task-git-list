# test-task-git-list

APK Link:  https://ioair.link/7yb3nt
(APK will not be able to access Repos as token is not present.)
Project Structure
- src
  - actions (Actions for Redux)
  - assets (Images and other useful files)
  - components (Custom components used in the app)
  - navigation (Navigation related files of project)
  - Reducers (Ruducers for redux)
  - sagas (Redux Sagas)
  - screen (Screens of the project)
  - services (Service related files)
  - stores (Redux store)
  - utils (Utility functions e.t.c)

How to Run (For developers)

Clone the master branch of the Repo

First Time Setup
npm install -g react-native - Install React Native

npm install -g cocoa-pods - Install this for iOS 

To Run the project:
npm install

cd ios -> pod install

For Android
-> Open Android Studio or Eclipse
-> Open the android folder of the project in android studio
-> Run the Project on a device or emulator

For iOS
-> Open xcworkspace file in XCode
-> Run the project on simulator or real device

Steps to Use the app:
Note: Add your github access token in src -> utils -> appConfig.js

On Landing Page
-> Add user name or email of the user to view repositories
Screenshot: https://ibb.co/30vd17p
On Home Page
-> To search the repositories , add text in the search field and click on Find button
-> To sort repositories by time click on sort button beside Find Button
-> To add repositories to watchlist click on star icon
-> To view PRs and issues of repository click on repository
-> To Logout and view another user click on logout button
Screenshot: https://ibb.co/XyZLVdJ
On More Details: 
-> View the issues on the selected repository
-> Click on create an issue button to create an issue 
      Enter title and body of the issue and click on create
-> To Logout and view another user click on logout button
Screenshots: https://ibb.co/qN6mgTJ
             https://ibb.co/dDp61qj
