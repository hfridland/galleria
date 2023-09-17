import { useDispatch, useSelector } from 'react-redux'
import logo from '../images/logo.svg'
import { getStatus, setPictInd as setPictIndDisp, setStatus as setStatusDisp } from '../features/status-slide'

const Header = () => {
    const dispatch = useDispatch()
    const setStatus = status => dispatch(setStatusDisp(status))
    const setCurInd = curInd => dispatch(setPictIndDisp(curInd))
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
            <header className='header'>
                <img src={logo} alt='logo' className='header__logo' />
                <div className="header__slideshow-starter" onClick={setShowDetail} >{getBtnTitle()}</div>
            </header>
            <hr className='header__hr'/>
        </>
    )
}

export default Header