const express = require("express");
const cors = require("cors");

//create a server
const server = express();

//add cors
server.use(cors());
server.use(express.json());

//set hostname
const hostname = "localhost";

const PORT = 4333;


//Routes
server.get("/", function(request, response){

    response.send("Welcome to Website");

})

//About Us 
server.get("/about-us", function(request, response){

    response.send("This is about us page");

})

//Contact Us
server.get("/contact-us", (request, response) => {

    response.send("This is Contact Us Page");

})

//login user
server.post("/login-user", function(request, response){
    console.log(request.body)

    const username = request.body.username
    const password = request.body.password

    //
})

server.get("/api/news", function(request, response){

    response.send({
        message: "News retrieved",
        data: [ {
            'date': 'Jan 15, 2022',
            'title': "Nigeria is a great country",
            'content': "This is a great country ruled by a great leader",
            'author': 'Lai Mohammed'
    }, 
    
    {
            'date': 'Jan 16, 2022',
            'title': "Nigeria is a bad country",
            'content': "This is a bad country ruled by a great leader",
            'author': 'Tru Mohammed'

    }, 
    {
        'date': 'Jan 17, 2022',
            'title': "Nigeria is a confused country",
            'content': "This is a confused country ruled by a great leader",
            'author': 'Garba Shehu'

    }
]
    })

})




//listen
server.listen(PORT, hostname, () => console.log(`Server running on http://${hostname}:${PORT}`))