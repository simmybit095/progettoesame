// Card.tsx

import React from 'react';
import { Character } from '../../hooks/useFetch'; 
import './Card.css'
import { Link } from 'react-router-dom';
import { DetailsPage } from '../DetailsPage/DetailsPage';


export const Card = (props: {
    name: string,
    status: string,
    species:string,
    origin: string,
    location:string,
    imgURL: string
}) => {

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={props.imgURL} alt="Character" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p>Status:{props.status} / Species{props.species}.</p>
                <p>Last known location: {props.origin}</p>
                <p>First seen in:   {props.location}</p>

                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Dettagli</button> */}
                    <button><Link to="/details" className="btn btn-primary">Dettagli</Link></button>
                </div>
            </div>
        </div>
    );
};
