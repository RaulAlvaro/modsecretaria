import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import './App.css';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { ciclos: [] }
        //this.ciclos = this.ciclos.bind(this)
    }

    componentDidMount(){
        axios.get('https://apidisponibilidad.herokuapp.com/curso/ciclos').then(res=>{
            const ciclos=res.data
            console.log(ciclos)
            this.setState({ciclos:ciclos})
        })
    }

  render() {
    const {ciclos} = this.state;
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Apertura del Semestre Academico</h1>
                <h2>{ciclos[0].nom_ciclo}</h2>
            </header>

            <Grid class="container-fluid">
                    <br/>
                    <br/>
                <Row>
                    <Col md={12}>

                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Agregar Semestre</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Row>
                                    <Col md={2}>
                                        <FormGroup>
                                            <ControlLabel>Nombre del Ciclo</ControlLabel>
                                            <FormControl type="text" value={""} placeholder="Enter text"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <ControlLabel>Fecha Inicio</ControlLabel>
                                            <FormControl type="text" value={""} placeholder="Enter text"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <ControlLabel>Fecha Fin</ControlLabel>
                                            <FormControl type="text" value={""} placeholder="Enter text"/>
                                        </FormGroup>

                                    </Col>
                                    <br/>
                                    <Col md={2}>  <Button bsStyle="primary">Agregar</Button> </Col>
                                </Row>


                            </Panel.Body>
                        </Panel>

                        <br/>
                        <br/>

                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Historial Semestres Academicos</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Row>
                                <Table striped bordered condensed hover responsive>
                                    <thead>
                                    <tr>
                                        <th class="text-center">Ciclo</th>
                                        <th class="text-center">Fecha Inicio</th>
                                        <th class="text-center">Fecha Fin</th>
                                        <th class="text-center">Habilitar</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2016-0</td>
                                        <td>02-01-2016</td>
                                        <td>15-03-2016</td>
                                        <Checkbox checked readOnly></Checkbox>
                                    </tr>
                                    <tr>


                                        <Checkbox checked readOnly></Checkbox>
                                    </tr>
                                    </tbody>
                                </Table>
                                </Row>
                                <Row>
                                    <Button bsStyle="align-center" bsStyle="primary">Editar</Button>
                                </Row>
                            </Panel.Body>
                        </Panel>

                    </Col>
                </Row>

            </Grid>




        </div>
    );
  }
}

export default App;
