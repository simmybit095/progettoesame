import { Link, useSearchParams } from "react-router-dom";
import { Character, useCharacters } from "../../hooks/useFetch";
import { Pagination } from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { SimpleNavbar } from "../SimpleNavbar/SimpleNavbar";
import './Characters.css'



export const Characters = () => {
    const theme = useSelector((state: any) => state.theme.value)

    const [searchParams] = useSearchParams()
    const [characters, info] = useCharacters(Number(searchParams.get('page')));

    return (<>
        <div className={`listCharacter ${theme} vp1`}>
            {/* <SimpleNavbar /> */}
            <Pagination currentPage={Number(searchParams.get('page')) || 1} info={info} />
            <ul>

                {characters.map(character =>
                    <>
                        {/* <li>{character.name}</li>
                <button><Link to={`details/${character.id.toString()}`} className="btn btn-primary">Dettagli</Link></button> */}
                        <li><Link to={`details/${character.id.toString()}`} className="btn btn-primary">{character.name}</Link></li>
                    </>
                )}
            </ul>

        </div>
    </>
    )
}