import React,{Component} from 'react';
import {Form,Button,Container,Row,Col,Card} from 'react-bootstrap';
import Head from 'next/head';

class Data extends Component{

    constructor(props){
      super(props)
    }


    render(){
      return(
        <div>
        <Container>
          <Row>
            <Col>
            <Card className="text-center">
              <Card.Header style={{backgroundImage:"linear-gradient(-90deg, #614385, #516395)"}}>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </Col>
            <Col>
            <Card className="text-center">
              <Card.Header style={{backgroundImage:"linear-gradient(-90deg, #614385, #516395)"}}>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </Col>
            <Col><Card className="text-center">
              <Card.Header style={{backgroundImage:"linear-gradient(-90deg, #614385, #516395)"}}>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted" >2 days ago</Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header style={{backgroundImage:"linear-gradient(-90deg, #614385, #516395)"}}>Featured</Card.Header>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header style={{backgroundImage:"linear-gradient(-90deg, #614385, #516395)"}}>Featured</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="holder.js/100px180" />
                <Card.Footer className="text-muted" >2 days ago</Card.Footer>
                </Card>
            </Col>
          </Row>
          </Container>
        </div>
      )
    }
  }
export default Data;
