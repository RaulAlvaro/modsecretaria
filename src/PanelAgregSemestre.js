import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, FieldGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const PanelAgregarSemestre = ({}) =>
    <div>
        <Panel bsStyle="primary">
            <Panel.Heading>
                <Panel.Title componentClass="h3">Agregar Semestre</Panel.Title>
            </Panel.Heading>
            <Panel.Body>

                <form className="ciclo-form" onSubmit={(e)=>this.addNewCiclo(e)}>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Semestre</ControlLabel>
                                <FormControl className="color-fondo"
                                             type="text"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Curso</ControlLabel>
                                <FormControl className="color-fondo"
                                             type="text"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Docente</ControlLabel>
                                <FormControl className="color-fondo"
                                             type="text"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Dia</ControlLabel>
                                <FormControl className="color-fondo"
                                             type="text"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Hora Inicio</ControlLabel>
                                <FormControl className="color-fondo"
                                             type="text"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Hora Final</ControlLabel>
                                <FormControl className="color-fondo"
                                             type="text"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button bsStyle="primary">Buscar</Button>
                </form>
            </Panel.Body>
        </Panel>
    </div>
export default PanelAgregarSemestre