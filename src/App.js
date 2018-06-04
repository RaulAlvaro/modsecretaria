import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import PanelAgregar from "./PanelAgregar";
import PanelHistorial from "./PanelHistorial";
import {Tabs, Tab} from "react-bootstrap";
import ModuloConsultas from "./ModuloConsultas";

class App extends Component {
    constructor(props){
        super(props);
        //this.state = { ciclos: [], ciclo:{} }
        this.state = { ciclos: []}
        //this.cambioCiclo = this.cambioCiclo.bind(this)
    }

    componentDidMount(){
        axios.get('https://apidisponibilidad.herokuapp.com/curso/ciclos').then(res=>{
            const ciclos=res.data
            console.log(ciclos)
            this.setState({ciclos:ciclos})
        })
        /*
        axios.post('https://apidisponibilidad.herokuapp.com/curso/nuevociclo', {ciclo})
            .then(res => {
                console.log(res);
                console.log(res.data);
        })
        */
    }
    /*
    cambioCiclo = nuevoCiclo => {
        this.setState({ ciclo: nuevoCiclo });
    }
    */

  render() {

    const ciclos = this.state.ciclos;
      return (
          ((ciclos.length>0)?<div>
              <div className="App">
                  <header className="App-header">
                      <h1 className="App-title">Módulo Secretaria</h1>
                  </header>

                  <Grid>
                      <Col md={12}>
                          <Tabs dfaultKey={1} id="uncontrolled-tab-example">
                              <Tab eventKey={1} title="Apertura de Ciclo">
                                  <br/>
                                  <br/>
                                  <Row>
                                      <Col md={12}>
                                          <PanelAgregar/>
                                          <br/>
                                          <br/>
                                          <PanelHistorial ciclos={ciclos}/>
                                      </Col>
                                  </Row>
                              </Tab>
                              <Tab eventKey={2} title="Módulo de Consultas">
                                  <ModuloConsultas/>
                              </Tab>

                          </Tabs>
                      </Col>

                  </Grid>
              </div>
          </div>:<div>cargando</div>)

      );

  }
}

export default App;
