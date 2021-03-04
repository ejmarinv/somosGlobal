Readme

1.-Validate NodeJs is already installed in the local machine

##Install NodeJs locally:
.- download the Nodejs installer from ->  https://nodejs.org/en/download/.
.- once completed the installation 
.- verify the node version installed
.- open a new cmd window
.- to validate the node version installed type the next command -> node -v. 

2.- Install selenium web driver for Chrome browser
.- Download selenium WebDriver from https://chromedriver.chromium.org/downloads
.- create a new folder on "C:\" and name it as "webdrivers".  example "C:\webdrivers".
.- dowload the driver into this new folder.
.- Go to the conf Environment Variables on windows and create a new var at the "User Variables" section.
.- At the "Path" variable, press "Edit" and include the root of the new folder created "C:\webdrivers". 


3.-Unzip or clone the project in a new folder.
.- open a new CMD window and type --> 
Git clone https://github.com/ejmarinv/somosGlobal.git
 

4.- Once cloned the project, please type at the cmd windows:
.- npm i --> in order to install all needed dependencies.***

if a new warning message is displayed please do this-->
.- npm audit fix (Only if necessary - not mandatory)   


5.- Please validate the version of the Chrome web browser is the same as the "Chromdriver" file, if not, please do this:

.- download chrome browser version 89
.- Use the "Chromedriver" file (attached to the project)

If everything is in order just let's do the final step:
6.- execute the npm run test:NOT-HEADLESS features/**/*.feature

