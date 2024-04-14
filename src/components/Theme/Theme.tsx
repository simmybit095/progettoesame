import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../../redux/themeSlice";
import { State } from "../../redux/store";
import './Theme.css'


export const Theme = () => {
    const theme = useSelector((state: State) => state.theme.value);
    const dispatch = useDispatch();

    return <>
    
        <button onClick={() => dispatch(toggle())}>Toggle</button>
    </>
}