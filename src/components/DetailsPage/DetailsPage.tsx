import React from "react";
import { useCharacters, Character } from "../../hooks/useFetch";
import { CardList } from "../CardList/CardList";
import { Card } from "react-daisyui";
import { useLocation, useParams, useSearchParams } from "react-router-dom";



export const DetailsPage = () => {
    const { id } = useParams();

    const page = Math.ceil(Number(id) / 20)

    const [characters, info] = useCharacters(page);
    const selectedCharacter = characters.find(character => character.id.toString() === id);

    return (
        <>
            {selectedCharacter && (
                <div key={selectedCharacter.id}>
                    <ul>
                        <li><img src={selectedCharacter.image} alt={selectedCharacter.name}></img></li>

                        <li>Name: {selectedCharacter.name}</li>
                        <li>Status: {selectedCharacter.status}</li>
                        <li>Species: {selectedCharacter.species}</li>
                        <li>Origin: {selectedCharacter.origin.name}</li>
                        <li>Location: {selectedCharacter.location.name}</li>
                        <li>URL: {selectedCharacter.url}</li>
                        <li>Created: {selectedCharacter.created}</li>
                        <li>Episode:<ul> {selectedCharacter.episode.map((episode) =>
                            <li><a href={episode}>{episode}</a></li>
                        )} </ul>
                        </li>
                    </ul>
                </div >
            )}
        </>
    );
}

