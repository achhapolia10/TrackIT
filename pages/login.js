import React,{Component} from 'react'
import {Navbar,Nav,Form,Button} from 'react-bootstrap'
import Layout from '../Components/Layout'
import Login from '../Components/login';

class Home extends Component{


  constructor(props){
    super(props)
  }


  render(){

    return (
      <Layout isLoggedIn={false}>
        <Login/>
      </Layout>
    );
  }



}


export default Home;
