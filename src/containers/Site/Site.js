import React, { Component }  from 'react';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Location from "./Location/Location";
import NavBar from '../../component/UI/NavBar/NavBar';
import {Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Switch} from 'react-router-dom';
import Error404 from '../../component/UI/Error404/Error404';
import Footer from '../../component/UI/Footer/Footer';
 
class Site extends Component {
    render(){

          return (
            <>
              <div className="site">
                <NavBar />
                <Container>
                  <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/Location" render={() => <Location />} />
                    <Route
                      path="/Contact"
                      render={(props) => <Contact {...props} />}
                    />
                    <Route render={() => <Error404>Error404</Error404>} />
                  </Switch>
                </Container>
                <div className="minSite"></div>
              </div>

              <Footer />
            </>
          );
    }
}

export default Site;