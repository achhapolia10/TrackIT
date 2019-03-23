import React,{Component} from 'react'
import {Navbar,Nav,Form,Button,Container} from 'react-bootstrap'
import Layout from '../Components/Layout'
import Landing from '../Components/Landing1';


class SmokeTrees extends Component{

  static async getInitialProps(ctx,loggedIn){

    return({isLoggedIn:loggedIn})
  }
  constructor(props){
    super(props)
  }


  render(){

    return (

      <Layout isLoggedIn={this.props.isLoggedIn }>

        <Landing />

      </Layout>
    );
  }



}


export default SmokeTrees;
