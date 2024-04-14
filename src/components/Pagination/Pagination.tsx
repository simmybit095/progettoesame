import { useSearchParams } from "react-router-dom";
import { Info } from "../../hooks/useFetch"

export const Pagination = (props: { currentPage: number, info: Info }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const setPage = (page: number) => new URLSearchParams('page=' + page)
  console.log('info count' + props.info?.count)
  console.log('info page' + props.info?.pages)
  // console.log('info page' + props.info.)

  function pageControl(page: number) {
    if (page <= 0) {
      return 1
    }
    if (page >= props.info.pages) {
      return props.info.pages
    }
    return page
  }
  return <div style={{ marginLeft: '100px' }} className="join">
    <button onClick={() => { setSearchParams(setPage(pageControl(page - 1))); }} className="join-item btn">«</button>
    <button className="join-item btn">Page {props.currentPage}</button>
    <button onClick={() => { setSearchParams(setPage(pageControl(page + 1))); }} className="join-item btn">»</button>
  </div>
}