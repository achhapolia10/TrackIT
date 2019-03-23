import React,{Component} from 'react'
import {Navbar,Nav,Form,Button} from 'react-bootstrap'
import Layout from '../Components/Layout'
import Data from '../Components/Data'


class Home extends Component{

  static async getInitialProps(ctx,loggedIn){
    console.log(loggedIn)
    return({isLoggedIn:loggedIn})
  }

  constructor(props){
    super(props)
  }


  render(){

    return (
      <Layout isLoggedIn={this.props.isLoggedIn}>
        <Data />
      </Layout>
    );
  }



}


export default Home;
