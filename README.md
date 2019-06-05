# dimsum-buddy
Full-stack application to help you order dim sum like a pro!

## Tech/Framework
- Front-end: React \ HTML \ CSS
- Back-end: Node.js \ Express \ MongoDB

## Installation
```
npm install 
```
## Create & Seed Database
Once MongoDB is installed, enter the following code to create a db named 'dimsumbuddy' with a collection, 'dimsums' and seed the db with .csv data
```
mongoimport --host=127.0.0.1 -d dimsumbuddy -c dimsums --type csv --file <insert .csv filepath here> --headerline
```
## App Demo
![alt text](https://i.imgur.com/51LQraO.gifv "Dim Sum Buddy App Demo")
