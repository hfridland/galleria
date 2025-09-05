import { useDispatch, useSelector } from 'react-redux'
import logo from '../images/logo.svg'
import {
  setPictInd as setPictIndDisp,
  setStatus as setStatusDisp,
  SlideStatus,
} from '../features/status-slide'
import { getStatus } from 'features/status-select'

const Header = () => {
  const dispatch = useDispatch()
  const setStatus = (status: SlideStatus) => dispatch(setStatusDisp(status))
  const setCurInd = (curInd: number) => dispatch(setPictIndDisp(curInd))
  const status = useSelector(getStatus)

  const setShowDetail = () => {
    setCurInd(0)
    switch (status) {
      case 'gallery':
        setStatus('detail')
        break
      case 'detail':
        setStatus('gallery')
        break
      default:
        setStatus('detail')
    }
  }

  const getBtnTitle = () => {
    switch (status) {
      case 'gallery':
        return 'START SLIDESHOW'
      case 'detail':
        return 'STOP SLIDESHOW'
      default:
        return 'START SLIDESHOW'
    }
  }

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <div className="header__slideshow-starter" onClick={setShowDetail}>
          {getBtnTitle()}
        </div>
      </header>
      <hr className="header__hr" />
    </>
  )
}

export default Header
