import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from'../assets/bigStar 1.png'
import * as url from "url";

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price: 2500, rating: 5, img: 'https://m.media-amazon.com/images/I/611fy2og0QL._AC_SY606_.jpg'}
    const description = [
        {id:1, title: "Оперативная память", description: "5Гб"},
        {id:2, title: "Камера", description: "12мп"},
        {id:3, title: "Колличество ядер", description: "4"},
        {id:4, title: "Батарея", description: "4000"},
        {id:5, title: "Аккумулятор", description: "RTDS"},
    ]

        return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image height={300} width={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-lg-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-lg-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-lg-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{device.price} UAN</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <h1>Характеристики</h1>
            <Row className="d-flex flex-column m-3">
                {description.map((info,index )=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;