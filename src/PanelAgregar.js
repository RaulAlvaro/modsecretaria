import React, { Component } from 'react';
//import DatePicker from 'react-datepicker';
import {Panel} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import DatePickerCustom from './DatePicker'

const PanelAgregar = ({cambioCiclo = f=>f,cambionombre = f=>f, cambiofechainicio= f=>f,
                       cambiofechafin = f=>f, cambioestado= f=>f})=>

    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Agregar Semestre</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <Row>
                <form>
                    <Col md={2}>
                        <FormGroup>
                            <ControlLabel>Nombre del Ciclo</ControlLabel>
                            <FormControl
                                name="nombre"
                                type="text"
                                placeholder="Enter text"
                                onChange={cambionombre()}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ControlLabel>Fecha Inicio</ControlLabel>
                            <DatePickerCustom
                                onChange={cambiofechafin()}
                            />
                        </FormGroup>

                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ControlLabel>Fecha Fin</ControlLabel>
                            <DatePickerCustom
                                onChange={cambiofechafin()}
                            />
                        </FormGroup>

                    </Col>
                    <br/>
                    <Col md={2}> <Button bsStyle="primary" onClick={cambioCiclo()}>Agregar</Button> </Col>
                </form>
            </Row>

        </Panel.Body>
    </Panel>


export default PanelAgregar