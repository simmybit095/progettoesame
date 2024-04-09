import { useSearchParams } from "react-router-dom";
import { Episode, useEpisodes } from "../../hooks/useFetch";


export const Episodes = () => {
    const [searchParams] = useSearchParams()
    const [episodes, info] = useEpisodes(Number(searchParams.get('page')));

    return <ul>
        {episodes.map(Episode => <li>{Episode.name}</li>)}
    </ul>
}