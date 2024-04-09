import { Info } from "../../hooks/useFetch"

export const Pagination = (props: {currentPage: number, info: Info}) => {
    return <div className="join">
    <button className="join-item btn">«</button>
    <button className="join-item btn">Page {props.currentPage}</button>
    <button className="join-item btn">»</button>
  </div>
}