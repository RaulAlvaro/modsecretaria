import React, { Component } from 'react';
//import DatePicker from 'react-datepicker';
import {Panel} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import DatePickerCustom from './DatePicker';
import moment from 'moment';


/*const PanelAgregar = ({cambioCiclo = f=>f,cambionombre = f=>f, cambiofechainicio= f=>f,
                       cambiofechafin = f=>f, cambioestado= f=>f})=>*/


class PanelAgregar extends Component{
    constructor(props){
        super(props);
        this.state = {
            fecha_inicio:moment()
        };
        this.handleChangeFechaInicio = this.handleChangeFechaInicio.bind(this)

    }

    addNewCiclo(e){
        e.preventDefault();
        var ciclo={
            nombre:this.nombre.value,

            fecha_fin:this.fecha_fin.value,

        }
        console.log(ciclo);
        console.log(this.date);
    }

    handleChangeFechaInicio(date){
        var nueva_fecha_inicio = date;
        this.setState({fecha_inicio:nueva_fecha_inicio});

        console.log("Conecta");
    }


    render(){
        return(
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Agregar Semestre</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Row>
                        <form className="ciclo-form" onSubmit={(e)=>this.addNewCiclo(e)}>
                            <Col md={2}>
                                <FormGroup>
                                    <ControlLabel>Nombre del Ciclo</ControlLabel>
                                    <FormControl
                                        name="nombre"
                                        type="text"
                                        placeholder="Enter text"
                                        inputRef={(input) => this.nombre = input}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Fecha Inicio</ControlLabel>
                                    <DatePickerCustom
                                        //startDate={this.state.fecha_inicio}
                                        //startDate={this.state.fecha_inicio} handleChange={this.state.handleChangeFechaInicio}
                                        startDate={() => this.state.fecha_inicio()} handleChange={this.state.handleChangeFechaInicio}
                                    />
                                </FormGroup>

                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Fecha Fin</ControlLabel>
                                    <DatePickerCustom
                                        ref={(input) => this.fecha_fin = input}
                                    />
                                </FormGroup>

                            </Col>
                            <br/>
                            <Col md={2}> <Button bsStyle="primary" type="submit">Agregar</Button> </Col>
                        </form>
                    </Row>

                </Panel.Body>
            </Panel>
        )
    }
}



export default PanelAgregar