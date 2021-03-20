import React, { Component }  from 'react';
 import axios from 'axios'; 
 import Titel from '../../../component/UI/Titel/Titel';
 import Button from "react-bootstrap/Button";
 
 import Etablishment from './Etablishment/Etablishment';
 import Row from "react-bootstrap/Row";
 import Col from "react-bootstrap/Col";
 

class Location extends Component {
  state = {
    research: null,
  };

  researchEstablishment = (type) => {
     axios.get(
       `https://etablissements-publics.api.gouv.fr/v3/departements/09/${type}`
     )
     .then(response =>{
         console.log(response.data)
         this.setState({ research: response.data.features });
     })
     .catch( error =>{
         console.log(error);
     })
  };
  render() {
    return (
      <>
        <Titel>search for an establishment</Titel>
        <Button
          variant="secondary"
          onClick={() => this.researchEstablishment("mairie")}
        >
          Town hall
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.researchEstablishment("commissariat_police")}
        >
          Police station
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.researchEstablishment("pole_emploi")}
        >
          Nav
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.researchEstablishment("prefecture")}
        >
          Prefecture
        </Button>
        <Row>{this.state.research &&
          this.state.research.map((etablishment) => {
            return (
              <>
                <Col md={6} key={etablishment.properties.id}>
                  <Etablishment
                    adresses={etablishment.properties.adresses}
                    horaires={etablishment.properties.horaires}
                    id={etablishment.properties.id}
                    name={etablishment.properties.nom}
                    phone={etablishment.properties.telephone}
                    mail={etablishment.properties.email}
                    url={etablishment.properties.url}
                  />
                </Col>
              </>
            );
          })}
          </Row>
      </>
      
    );
  }
}

export default Location;