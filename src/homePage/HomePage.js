import { Row, Col, Card, Button } from "antd";
import { useEffect, useState } from "react";
import "./homepage.css"
const { Meta } = Card;
function HomePage() {
    const [users, setUsers] = useState([{
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }]);


    // const getUsers = async () => {
    //     const response = await fetch("https://reqres.in/api/users");
    //     setUsers(await response.json());
    //     console.log(users);
    // }

    // useEffect(()=>{
    //     getUsers();
    // },[])
    return (
        <>

            <Row className="headinfo">
                <div>Get User Details by :- <span className="api">API</span></div>
            </Row>
            <Col className="main-box">

                {users == "" ?
                    <Button>Double click to load</Button> :
                    users.map((e) => {
                        return (
                            <Row className="UserBox" justify={"center"} align={"middle"} gutter={20}>
                                <span className="userId" >{e.id}</span>
                                <div className="Avatar">
                                    <img className="Avatarimg" src={e.avatar} />
                                </div>
                                <Col className="userMeta">
                                    <div className="userName">
                                        {e.first_name} {e.last_name}
                                    </div>
                                    <div className="userName">
                                        {e.email}
                                    </div>
                                </Col>
                            </Row>
                        )
                    })
                }


                {/* <Button onClick={getUsers} >Double click to load</Button> */}


            </Col>
        </>
    )
} export default HomePage;