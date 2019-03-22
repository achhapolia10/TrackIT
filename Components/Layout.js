import React,{Component} from 'react';
import {Container} from 'react-bootstrap'
import Header from './Header'
import Head from 'next/head'

class Layout extends Component{

  constructor(props){
    super(props)

    }

    render(){


      return(
        <div className="App">
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"/>
        </Head>
          <Header isLoggedIn= {this.props.isLoggedIn} />
          <Container>
            {this.props.children}
          </Container>
        </div>  )
      }
}

export default Layout;
