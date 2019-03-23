import React,{Component} from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap'
import Link from 'next/link'

class Header extends Component{

  constructor(props){
    super(props)

    }

    render(){
      let logButton;
      if(this.props.isLoggedIn)
        logButton = <Link href ={"/logout"}><Button> Logout</Button></Link>
      else
        logButton =<Link href={"/login"}><Button> Login</Button></Link>


      return(
        <Navbar variant="dark" sticky="top" expand="lg" style={{backgroundImage:"linear-gradient(-90deg, purple, indigo)"}}>
        <Navbar.Brand href='/'>Smoke Trees</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" justify variant="Nav">
        <Nav.Link href="home">Home</Nav.Link>

        </Nav>
        {logButton}

</Navbar.Collapse>
</Navbar>
        )
        }



}

export default Header;
