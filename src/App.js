import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import PanelAgregar from "./PanelAgregar";
import PanelHistorial from "./PanelHistorial";

class App extends Component {
    constructor(props){
        super(props);
        this.state = { ciclos: [], ciclo:{} }
        this.cambioCiclo = this.cambioCiclo.bind(this)
    }

    componentDidMount(){
        axios.get('https://apidisponibilidad.herokuapp.com/curso/ciclos').then(res=>{
            const ciclos=res.data
            console.log(ciclos)
            this.setState({ciclos:ciclos})
        })

        axios.post('https://apidisponibilidad.herokuapp.com/curso/nuevociclo', {ciclo})
            .then(res => {
                console.log(res);
                console.log(res.data);
        })
    }

    cambioCiclo = nuevoCiclo => {
        this.setState({ ciclo: nuevoCiclo });
    }


  render() {

    const ciclos = this.state.ciclos;
      return (
          ((ciclos.length>0)?<div>
              <div className="App">
                  <header className="App-header">
                      <h1 className="App-title">Apertura del Semestre Academico</h1>
                      <h2>{ciclos[0].nom_ciclo}</h2>
                  </header>

                  <Grid>
                      <br/>
                      <br/>
                      <Row>
                          <Col md={12}>
                              <PanelAgregar cambioCiclo={cambioCiclo}/>
                              <br/>
                              <br/>
                              <PanelHistorial ciclos={ciclos}/>

                          </Col>
                      </Row>

                  </Grid>
              </div>
          </div>:<div>cargando</div>)

      );

  }
}

export default App;
