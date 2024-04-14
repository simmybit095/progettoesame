import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Card } from "../Card/Card";
import "./CardList.css";
import { Theme } from '../Theme/Theme';
import { useSelector } from 'react-redux';

import { useCharacters, Character } from "../../hooks/useFetch";

export const CardList = () => {
    const theme = useSelector((state: any) => state.theme.value)

    const { pathname } = useLocation();
    useEffect(() => {
        // Esegui azioni all'avvio o all'aggiornamento del componente
    }, []);

    // Recupera i dati dei personaggi utilizzando l'hook useCharacters
    const [characters, info] = useCharacters();

    return (
        <>
            <div className={`App ${theme}  vp1`}>

                <div className="cardContainer">
                    {characters.map((character: Character) => (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            origin={character.origin.name}
                            location={character.location.name}
                            image={character.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
