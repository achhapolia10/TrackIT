import React,{Component} from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap'


class Header extends Component{

  constructor(props){
    super(props)

    }

    render(){
      let logButton;
      if(this.props.isLoggedIn)
        logButton = <Button> Logout</Button>
      else
        logButton = <Button> Login</Button>


      return(
        <Navbar variant="dark" bg="dark" sticky="top" expand="lg">
        <Navbar.Brand href="/">Smoke Trees</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>

        </Nav>
        {logButton}

</Navbar.Collapse>
</Navbar>
        )
        }



}

export default Header;
