import React,{Component} from 'react';
import {Form,Button,Container,Row,Col,Card} from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';
class Landing extends Component{

    constructor(props){
      super(props)
    }


    render(){
      return(
        <Container style={{padding:"40px"}}> 
            <Head>
                <link rel="stylesheet" href="../static/css/landing.css" />
            </Head>
            <Row  style={{padding:"100px"}}>
                <Col >
                    <Card style={{opacity:"0.5",height:'400px'}}>
                    <Card.Body className="cardbody">
                    <h1>VAHAAN</h1>
                    <h5>describe VAHAAN</h5>
                    </Card.Body>
                    </Card>
                </Col>
                <Col  style={{opacity:0.5}}>
                    <Card>
                        <Card.Body>
                            <Row style={{padding:"20px"}}>
                                something
                            </Row>
                            <Row style={{padding:"20px"}}>
                                something
                            </Row>
                            <Row style={{padding:"20px"}}>
                                something
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      )
    }
  }
export default Landing;