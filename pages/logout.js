import React,{Component} from 'react';
import {Button,Container,Row,Form,Col} from 'react-bootstrap'
import Layout from '../Components/Layout';
import fetch from 'isomorphic-fetch'


class LogoutPage extends Component{


  static async getInitialProps(ctx,loggedIn){

    return({isLoggedIn:loggedIn})
  }

  constructor(props) {
      super(props);
      console.log(props)
      if(props.isLoggedIn)
      document.cookie = 'token=expired'
    }
    render(){


  return  <Layout> <div>You Have been successfully Logged out</div></Layout>

}
}
export default LogoutPage
