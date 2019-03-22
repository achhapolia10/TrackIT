import React,{Component} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import Layout from '../Components/Layout'


class Home extends Component{


  constructor(props){
    super(props)
  }


  render(){

    return (
      <Layout isLoggedIn={true}>
        <h1>This is body</h1>
      </Layout>
    );
  }



}


export default Home;
