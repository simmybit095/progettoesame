import { useSearchParams } from "react-router-dom";
import { Character, useCharacters } from "../../hooks/useFetch";
import { Pagination } from "../Pagination/Pagination";


export const Characters = () => {
    const [searchParams] = useSearchParams()
    const [characters, info] = useCharacters(Number(searchParams.get('page')));

    return (<>
    <Pagination currentPage={Number(searchParams.get('page')) || 1} info={info} />
    <li><ul>
        {/* {characters.map(character => <li>{character.name}</li>)} */}
        {characters.map(character => <li>{character.origin.name}</li>)}
    </ul>
    </li>
    </>)
}