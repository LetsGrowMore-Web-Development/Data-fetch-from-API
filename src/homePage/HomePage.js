import { Row, Col, Card, Button } from "antd";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from "react";
import "./homepage.css"
const { Meta } = Card;
function HomePage() {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPagenumber] = useState(1);
    const [isLoding, setLoading] = useState(false);
    const [isInitialload, setInitialLoad] = useState(true);
    const [isMore, setMore] = useState(true);

    const getUsers = async () => {
        setLoading(true);
        const response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
        var result = (await response.json());
        setTimeout(() => {
            if (result && result.data && Array.isArray(result.data) && result.data.length > 0) {
                var usr = users;
                if (pageNumber == 1) {
                    usr = result.data;
                } else
                    usr = [...usr, ...result.data];
                setPagenumber(pageNumber + 1);
                setUsers([...usr]);
            } else
                setMore(false);
            console.log(users);
            setLoading(false);
        }, 2000);
    }

    // useEffect(()=>{
    // },[])
    if (isInitialload) {
        getUsers();
        setInitialLoad(false);
    }
    return (
        <>

            <Row className="headinfo">
                <div>Get User Details by :- <span className="api">API</span></div>
            </Row>
            <Col className="main-box">

                {users && Array.isArray(users) && users.length > 0 &&
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
                {!isLoding && users && Array.isArray(users) && users.length == 0 && <p>No record found</p>}
                {isLoding && <Player
                    autoplay
                    loop
                    src="https://assets8.lottiefiles.com/packages/lf20_p8bfn5to.json"
                    style={{ height: '300px', width: '300px' }}
                >
                  
                </Player>}
                {isMore && !isLoding && <Button className="btn" onClick={getUsers} >Load More</Button>}


                {/* <Button onClick={getUsers} >Double click to load</Button> */}


            </Col>
        </>
    )
} export default HomePage;