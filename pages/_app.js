import React from 'react'
import App, { Container } from 'next/app'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import Router from 'next/router'
class MyApp extends App {


  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    let loggedIn = false;
    const cookie =await nookies.get(ctx);
    jwt.verify(cookie.token,'madeinvit',function(err,payload){
      if(err){
      loggedIn=false;
    }  else {
        loggedIn=true;
      }
    })
    if (Component.getInitialProps) {
      try{
        pageProps = await Component.getInitialProps(ctx,loggedIn)
      } catch(err){
        console.log('I think we Redirected')
      }
    }


    return { pageProps }
  }

  render() {


    const { Component, pageProps } = this.props
    return (
      <Container>

        <Component {...pageProps}   />
      </Container>
    )
  }
}

export default MyApp
