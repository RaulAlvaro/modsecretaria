import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, FieldGroup} from 'react-bootstrap';
import PanelAgregarSemestre from "./PanelAgregSemestre";
import PanelResultado from "./PanelResultado";

const ModuloConsultas = ({}) =>
    <div>
        <h2>Modulo Consultas</h2>
        <PanelAgregarSemestre/>
        <PanelResultado/>
    </div>
export default ModuloConsultas
