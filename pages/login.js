import React,{Component} from 'react'
import {Form,Button,Container,Row,Col,Card} from 'react-bootstrap';
import Layout from '../Components/Layout'
import formurlencoded from 'form-urlencoded'
import fetch from 'isomorphic-fetch'
import Head from 'next/head'
import Router,{withRouter} from 'next/router'

class Home extends Component{

  static async getInitialProps(ctx,loggedIn){

    return({isLoggedIn:loggedIn})
  }
  constructor(props){
    super(props)
    this.state= {email:'',password:''}
  }

  submithandler =async (event) =>{

    event.preventDefault();
    let formData ={
      email:this.state.email,
      password:this.state.password
    }
      const res = await fetch('http://localhost:8080/authenticateAdmin',
      {method: 'post',
          body: formurlencoded(formData),
          headers: new Headers({
            'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
          })});
      const data = await res.json()
      if(data.status=='success'){
      document.cookie = "token="+data.token
      Router.push('/home')
    }

  }

  passwordchangehandler = (event)=>{
    this.setState({password:event.target.value});
  }
  emailChangeHandler = (event)=>{
    this.setState({email:event.target.value});
  }



  render(){
    if(this.props.isLoggedIn)
    this.props.router.push('/')

    return (

      <Layout isLoggedIn={this.props.isLoggedIn}>
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
            <Form  onSubmit={this.submithandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color:'black'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.emailChangeHandler} />
                <Form.Text className="text-muted">
                  <a  style={{color:'black'}}>We'll never share your email with anyone else.</a>
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{color:'black'}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password should be atleast 8 characters" value={this.state.password} onChange={this.passwordchangehandler}/>
              </Form.Group>
              <Button variant="primary" type="submit">Log in</Button>
            </Form>
            </Card.Body>

          </Card.Body>
        </Col>
        </Row>
        </Card>
        </Col>
        </Row>
    </Container>
      </Layout>
    );
  }



}


export default withRouter(Home);
