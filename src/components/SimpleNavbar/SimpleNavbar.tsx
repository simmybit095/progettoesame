import { Link, useLocation, useSearchParams } from "react-router-dom"


export const SimpleNavbar = () => {
    const {pathname} = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const bold = {fontWeight: "bold"};
    const urls = ['/characters', '/episodes'];

    const setPage = (page: number) => new URLSearchParams('page=' + page)
    return <>
        
        {urls.map(url => {
            return <>
                    <Link style={pathname === url ? bold: {}} to={url}>{url.replace('/', '')}</Link>
                    <br />
                </>
        })}
        <br />
        <p>{page}</p>
        <button onClick={() => {setSearchParams(setPage(page - 1));}} >Prev</button><br />
        <button onClick={() => {setSearchParams(setPage(page + 1));}} >Next</button>
    </>
}