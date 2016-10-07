# cam

a [Sails](http://sailsjs.org) application

`npm install --save jsonwebtoken bcrypt-nodejs passport passport-jwt passport-local`

Inscription sur /auth/signup en POST

    email, username, password
    
On récupère le token, que l'on va placer dans le Header HTTP en GET:

    `Authorization   |   JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoieW8iLCJwYXNzd29yZCI6IiQyYSQxMCRSZGU3Y1U2dXQ4NW5xbTYuWU9oSExPaWRGd1Q2MTExandGM2dsOUx1d0puczBSZ3ZKY1RMSyIsImVtYWlsIjoiWU9AWU8uZnIiLCJjcmVhdGVkQXQiOiIyMDE2LTEwLTA3VDA4OjQ5OjE1LjExM1oiLCJ1cGRhdGVkQXQiOiIyMDE2LTEwLTA3VDA4OjQ5OjE1LjExM1oiLCJpZCI6Nn0sImlhdCI6MTQ3NTgzMDE1NX0.kP_tOzNwzReeCF37lXpnJX-xR933GhjRBy1GvuD2lj8`
    

/!\ Attention à l'espace entre JWT et le token