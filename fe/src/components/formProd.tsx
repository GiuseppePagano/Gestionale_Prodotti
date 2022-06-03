import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Prodotto } from "../interfaces/prodotto";

export const FormProd = ()  => {

    return (
        <>
            <div className="row">
                <div className="col-lg-3">
                </div>
                <div className="col-lg-6 text-white">
                   
                        <Form.Group>
                            <Form.Label className="mt-2">Nome</Form.Label>
                            <Form.Control type="text" id="inputNome" placeholder="Inserisci il nome "></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-2">Link</Form.Label>
                            <Form.Control type="text" id="inputLink" placeholder="Inserisci il link"></Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label className="mt-2">Descrizione</Form.Label>
                            <Form.Control type="text" id="inputDescrizione" placeholder="Inserisci la descrizione"></Form.Control>
                        </Form.Group>
						<Form.Group>
                            <Form.Label className="mt-2">prezzo</Form.Label>
                            <Form.Control type="text" id="inputPrezzo" placeholder="Inserisci il prezzo"></Form.Control>
                        </Form.Group>
						<Form.Group>
                            <Form.Label className="mt-2">Percentuale</Form.Label>
                            <Form.Control type="text" id="inputPercentuale" placeholder="Inserisci la percentuale"></Form.Control>
                        </Form.Group>
						<Form.Group>
                            <Form.Label className="mt-2">Codice Univoco</Form.Label>
                            <Form.Control type="text" id="inputCodice" placeholder="Inserisci il codice"></Form.Control>
                        </Form.Group>
                        <button type="submit" className="btn btn-primary mt-3">Inserisci</button>
                    
                </div>
            </div>
        </>
    )
}
