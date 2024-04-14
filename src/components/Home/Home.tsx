import { CardList } from "../CardList/CardList"
import { Theme } from '../Theme/Theme'
import { useSelector } from "react-redux"

export const Home = () => {
    const theme = useSelector((state: any) => state.theme.value)

    return (
        <div className={`App ${theme} vp1`}>
            {/* <Theme></Theme> */}
                <CardList />
            
        </div>
    )
}
