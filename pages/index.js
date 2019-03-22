import React,{Component} from 'react'
import {Navbar,Nav,Form,Button} from 'react-bootstrap'
import Layout from '../Components/Layout'
import landingPage from '../Components/login';

class Home extends Component{


  constructor(props){
    super(props)
  }


  render(){

    return (
      <Layout isLoggedIn={true}>
        <landingPage />
      </Layout>
    );
  }



}


export default Home;
