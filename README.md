PostMan | https://www.getpostman.com/collections/4f1e0439255a518a6380

http://localhost:5000/signin

{
	"email":"rex@gmail.com",
	"password":"12345"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFkYzg0OTYxOGMxMDFiMjQ1ZDAwMWIiLCJpYXQiOjE1ODg0ODkyNzR9.szGO9FQ1Vtwn9kKTqtfQgGwfzPw5Q-VeXiTVjiX9lkM",
    "user": {
        "_id": "5eadc849618c101b245d001b",
        "name": "test",
        "email": "test@gmail.com"
    }
}

http://localhost:5000/addcar

{
	"carname":"Honda City ",
	"colour":"Red",
	"model":"Sedan FT43",
	"capacity":"5 seater",
	"vehiclenumber":"MH 34 GF 5678",
	"rentperday":"3500",
	"bookingstatus":"false",
	"city":"mumbai"
}

{
    "post": {
        "_id": "5eadde0ab306461f1cc1dae7",
        "carname": "Honda City ",
        "colour": "Red",
        "model": "Sedan FT43",
        "capacity": "5 seater",
        "vehiclenumber": "MH 34 GF 5678",
        "rentperday": 3500,
        "bookingstatus": false,
        "city": "mumbai",
        "postedBy": {
            "_id": "5eadc849618c101b245d001b",
            "email": "test@gmail.com",
            "name": "test",
            "__v": 0
        },
        "createdAt": "2020-05-02T20:54:34.060Z",
        "updatedAt": "2020-05-02T20:54:34.060Z",
        "__v": 0
    }
}

http://localhost:5000/viewcar

{
    "mypost": [
        {
            "_id": "5eadd8731be6071a34b71c7a",
            "carname": "Swift Desire",
            "colour": "white",
            "model": "Sedan RT31",
            "capacity": "4 seater",
            "vehiclenumber": "MH 56 YT 6243",
            "rentperday": 2500,
            "bookingstatus": false,
            "city": "Nagpur",
            "postedBy": "5eadc849618c101b245d001b",
            "createdAt": "2020-05-02T20:30:43.044Z",
            "updatedAt": "2020-05-02T20:30:43.044Z",
            "__v": 0
        },
        {
            "_id": "5eadde0ab306461f1cc1dae7",
            "carname": "Honda City 2",
            "colour": "Red",
            "model": "Sedan FT43",
            "capacity": "5 seater",
            "vehiclenumber": null,
            "rentperday": null,
            "bookingstatus": true,
            "city": "mumbai",
            "postedBy": "5eadc849618c101b245d001b",
            "createdAt": "2020-05-02T20:54:34.060Z",
            "updatedAt": "2020-05-02T22:02:07.871Z",
            "__v": 0
        }
    ]
}

http://localhost:5000/bookcar/5eadde0ab306461f1cc1dae7

{
    "_id": "5eadde0ab306461f1cc1dae7",
    "username": "Gary",
    "contactnum": "83759823",
    "dateofissue": "2020-05-02T20:44:36.060Z",
    "returndate": "7 june",
    "postedBy": "5eadde0ab306461f1cc1dae7",
    "postedBy": "5eadc849618c101b245d001b",
    "createdAt": "2020-05-02T20:24:34.060Z",
    "updatedAt": "2020-05-02T20:24:34.060Z",
    "__v": 0
}

http://localhost:5000/viewcarsbooked

{
    "mypost": [
        	{
		    "_id": "5eadde0ab306461f1cc1dae7",
		    "username": "Gary",
		    "contactnum": "83759823",
		    "dateofissue": "2020-05-02T20:44:36.060Z",
		    "returndate": "7 june",
		    "postedBy": "5eadde0ab306461f1cc1dae7",
		    "postedBy": "5eadc849618c101b245d001b",
		    "createdAt": "2020-05-02T20:24:34.060Z",
		    "updatedAt": "2020-05-02T20:24:34.060Z",
		    "__v": 0
			},
			{
		    "_id": "5eadde0ab306461f1cc1dae7",
		    "username": "Henry",
		    "contactnum": "822763272",
		    "dateofissue": "2020-05-02T20:46:26.060Z",
		    "returndate": "20 june",
		    "postedBy": "5eadde0ab306461f1cc1dae7",
		    "postedBy": "5eadc849618c101b245d001b",
		    "createdAt": "2020-05-02T20:46:26.060Z",
		    "updatedAt": "2020-05-02T20:46:26.060Z",
		    "__v": 0
		}
	]
}

http://localhost:5000/updatecar/5eadde0ab306461f1cc1dae7

{
    "_id": "5eadde0ab306461f1cc1dae7",
    "carname": "Honda City 2",
    "colour": "Red",
    "model": "Sedan FT43",
    "capacity": "5 seater",
    "vehiclenumber": "MH 34 GF 5678",
    "rentperday": 3500,
    "bookingstatus": false,
    "city": "mumbai",
    "postedBy": "5eadc849618c101b245d001b",
    "createdAt": "2020-05-02T20:24:34.060Z",
    "updatedAt": "2020-05-02T20:24:34.060Z",
    "__v": 0
}

http://localhost:5000/deletecar/5eadde0ab306461f1cc1dae7

{"message":"Post deleted successfully!"}


