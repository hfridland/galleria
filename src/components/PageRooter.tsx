import { useSelector } from 'react-redux'
import Gallery from './Gallery'
import Detail from './Detail'
import { getStatus } from 'features/status-select'

const PageRooter = () => {
  const status = useSelector(getStatus)

  const curPage = {
    gallery: <Gallery />,
    detail: <Detail />,
  }

  return <>{curPage[status]}</>
}

export default PageRooter
