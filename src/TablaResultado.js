import React from 'react';
import {Table, FieldGroup} from 'react-bootstrap';

const TableResultado = ({}) =>
    <div>
        <Table>
            <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Apellido</th>
                    <th className="text-center">DNI</th>
                    <th className="text-center">Celular</th>
                    <th className="text-center">Disponibilidad</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Table>
    </div>
export default TableResultado