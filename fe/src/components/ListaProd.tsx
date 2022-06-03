import React, { useState } from "react";
import axios from "axios";
import { Button, Col, Row, Form, Table } from "react-bootstrap";
import { FormProd } from "./formProd";
import { Prodotto } from "../interfaces/prodotto";

export const ListaProd = () => {

    const [lista, setLista] = useState<Prodotto[]>();

    if(!lista)
        axios.get<Prodotto[]>("http://localhost:4000/prod/lista").then((risultato) => {
            setLista(risultato.data)
        })

    return (
        

        <>
       <FormProd></FormProd>
        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Codice</th>
                    <th>Descrizione</th>
                    <th>Immagine</th>
                    <th>Prezzo</th>
                    <th>Sconto</th>
                    <th>Prezzo Scontato</th>
                    
                </tr>
            </thead>
          
        </table>
    </>

    )



}