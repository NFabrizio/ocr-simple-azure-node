# ocr-simple-azure-node  

This is a relatively simple, optical character recognition script. It was built
to integrate with the Microsoft Azure vision API.  

## Installation and Set Up  
Below are the instructions for installing this application.  
*These instructions are valid as of 2019.10.30*  

### Environment Set Up  
1. Install node.  
   1. Download the latest version of Node for your OS at (this link)[https://nodejs.org/en/download/].  
      Alternatively, look for the link at the bottom of the page linked above for
      the link to install Node using a package manager like Homebrew.  
2. Clone this repository to your local environment.  
   1. Fork this Github repo.  
      1. In a web browser, visit https://github.com/NFabrizio/ocr-simple-azure-node  
      2. Click the Fork button in the upper right corner of the screen  
      3. In the "Where should we fork this repository?" pop up, select your username.
    Github should create a fork of the repo in your account  
   2. Clone your fork of the ocr-simple-azure-node repo.  
      1. In the terminal on your local environment, navigate to the directory where
         you want to clone the ocr-simple-azure-node repo  
         `cd ~/path/to/your/directory`  
      2. In the terminal, run:  
         `git clone [clone-url-for-your-fork]`  
         The URL should be in the format git@github.com:YourUsername/ocr-simple-azure-node.git  
3. Install the NPM packages.
   1. Change into the directory where you cloned the repo.  
     `cd ~/path/to/your/directory/ocr-simple-azure-node`  
   2. Run the NPM install script.  
     `npm install`  
4. Run the application from your local machine.  
   1. Change into the directory where you cloned the repo, if you are not already
      inside it.  
     `cd ~/path/to/your/directory/ocr-simple-azure-node`  
   2. In your terminal on your local machine, run the script and pass in the path
      to the image you want to send to Azure for analysis.  
     `npm start images/sign-security-camera.jpg`  
     You can provide the name of any image in the image option as long as you
     update the path to that image.  
     *Note: The path to the image you provide should be a relative path that is
     relative to the src/index.js file.*

## Script Use  
Once you run the script, passing it the path to an image, the data returned from
the Azure API should be logged into your terminal window.  

Once the script finishes, it will stop itself and return you to your command line
in your terminal.  
