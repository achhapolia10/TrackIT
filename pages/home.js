import React,{Component} from 'react'
import {Navbar,Nav,Form,Button} from 'react-bootstrap'
import Layout from '../Components/Layout'
import Data from '../Components/Data'


class Home extends Component{


  constructor(props){
    super(props)
  }


  render(){

    return (
      <Layout isLoggedIn={false}>
        <Data />
      </Layout>
    );
  }



}


export default Home;
