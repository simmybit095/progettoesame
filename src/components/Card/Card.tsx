// Card.tsx

import React from 'react';
import { Character } from '../../hooks/useFetch';
import './Card.css'
import { Link } from 'react-router-dom';
import { DetailsPage } from '../DetailsPage/DetailsPage';
import { useSelector } from 'react-redux';
import { Theme } from '../Theme/Theme'

// const theme = useSelector((state: any) => state.theme.value)


export const Card = (
    props: {
    id: number,
    name: string,
    status: string,
    species: string,
    origin: string,
    location: string,
    image: string,

}
) => {
    const theme = useSelector((state: any) => state.theme.value)

    // console.log('string',typeof(props.id.toString()))
    return (
        <div className={`${theme}`}>
            <div className={`${theme} card card-side bg-base-100 shadow-xl`}>
                <figure><img src={props.image} alt="Character" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p>Status:{props.status} / Species{props.species}.</p>
                    <p>Last known location: {props.origin}</p>
                    <p>First seen in:   {props.location}</p>

                    <div className="card-actions justify-end">
                        <button><Link to={`characters/details/${props.id.toString()}`} className="btn btn-primary">Dettagli</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
