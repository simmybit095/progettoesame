import { Link, useSearchParams } from "react-router-dom";
import { Episode, useEpisodes } from "../../hooks/useFetch";
import { Theme } from "../Theme/Theme";
import { useSelector } from "react-redux";

export const Episodes =  (
//     props: {
//     id: number,
//     name: string,
//     status: string,
//     species: string,
//     origin: string,
//     location: string,
//     image: string,

// }
) =>  {
    const theme = useSelector((state: any) => state.theme.value)

    const [searchParams] = useSearchParams()
    const [episodes, info] = useEpisodes(Number(searchParams.get('page')));

    return (
        <div className={`${theme} vp1`}>

            <ul>
                {episodes.map(Episode => <>
                <li>{Episode.name}</li>
                {/* <button><Link to={`details/${props.id.toString()}`} className="btn btn-primary">Dettagli</Link></button> */}
                </>
            )}
            </ul>
        </div>
    )
}