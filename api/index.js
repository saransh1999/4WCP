const { request, response } = require("express");
const express = require("express")
const app = express();
app.use(express.json())
const jwt = require("jsonwebtoken")
var cors = require('cors');
app.use(cors());


const users = [
    {
        id: "1",
        employee_id: "Jhon",
        password: "123jhon",
        isAdmin: true,
    },
    {
        id: "2",
        employee_id: "Jake",
        password: "123jake",
        isAdmin: false,
    },
    {
        id: "3",
        employee_id: "Jane",
        password: "123jane",
        isAdmin: false,
    }
]

let refreshTokens = [];

app.post("/api/refresh", (request, response) => {
    const refreshToken = request.body.token;
    if (!refreshToken) return response.status(401).json("You are  not authenticated")
    if (!refreshTokens.includes(refreshToken)) {
        return response.status(403).json("Refresh token is not valid ")
    }
    jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
        if (err) {
            console.log(err);
        }
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAcessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshtoken(user);  

        refreshTokens.push(newRefreshToken);
        response.status(200).json({
            acessToken: newAcessToken,
            refreshToken: newRefreshToken
        });
    });
})
const generateAccessToken =(user)=>{
    return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "my top secret key");;
}

const generateRefreshtoken = (user)=>{
    return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
}

app.post("/api/login", (request, response) => {
    const { employee_id, password } = request.body;
    const user = users.find((currentuser) => {
        return currentuser.employee_id === employee_id && currentuser.password === password;
    });
    if (user) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshtoken(user); 

        refreshTokens.push(refreshToken);
        response.json({
            employee_id : user.employee_id,
            isAdmin : user.isAdmin,
            accessToken,
            refreshToken
        })
    }
    else {
        response.status(400).json("employee_id or password incorrect! ")
    }

})


const verify = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "my top secret key", (err, user) => {
            if (err) {
                return response.status(403).json("Token is not valid");
            }
            request.user = user;
            next();
        })
    }
    else {
        response.status(401).json("You are not authenticated");
    }
}

app.delete("/api/users/:userId", verify, (request, response) => {
    if (request.user.id === request.params.userId || request.user.isAdmin) {
        response.status(200).json("valid deletion request");
    }
    else {
        response.status(403).json("Deletion not allowed");
    }
})

app.post("/api/logout", verify, (reqest, response) => {
    const refreshToken = reqest.body.token;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    response.status(200).json("You logged out successfully.");
  });

app.listen(5000, () => console.log("Listening at 5000"))