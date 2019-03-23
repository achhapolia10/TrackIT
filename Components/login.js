import React,{Component} from 'react';
import {Form,Button,Container,Row,Col,Card} from 'react-bootstrap';
import Head from 'next/head';


class Login extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
        <Container style={{marginTop:'60px'}} >
          <Head>
            <link rel="stylesheet" href = "../static/css/style.css"/>
            </Head>
          
        <Row style={{paddingTop:'40px'}} >
          <Col md={{span:10,offset:1}}>
            <Card style={{background:'rgba(240,240,240,0.4225)'}}>
              <Card.Body style={{textAlign:'center'}}>
                <h1 style={{color:'white'}}>VAAHAN</h1>
                <h5 style={{color:'#8a96ad'}}>nice work</h5>
              </Card.Body>
          <Row style ={{marginTop:"20px"}}>
          <Col  md={{span:8,offset:2}} >
            <Card.Header as="h3" >SignIn</Card.Header>
            <Card.Body>
              <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{color:'black'}}>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    <a  style={{color:'black'}}>We'll never share your email with anyone else.</a>
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{color:'black'}}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password should be atleast 8 characters" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox" style={{paddingLeft:'50px'}}>
                  <Form.Check type="checkbox" label="You agree to our terms and policies" />
                </Form.Group>
              </Form>
              </Card.Body>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
          </Row>
          </Card>
          </Col>
          </Row>
      </Container>
    )
  }

}

export default Login;