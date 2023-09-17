import iconBack from '../images/icon-back-button.svg'
import iconNext from '../images/icon-next-button.svg'

import { getCurInd, pictIndexes } from "../features/status-slide"
import { setPictInd as setPictIndDisp, isPrevEnabled as isPrevEnabledDisp, isNextEnabled as isNextEnabledDisp } from "../features/status-slide"
import data from '../data.json'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const Detail = () => {
    const dispatch = useDispatch()
    const curInd = useSelector(getCurInd)
    const isPrevEnabled = useSelector(isPrevEnabledDisp)
    const isNextEnabled = useSelector(isNextEnabledDisp)

    const setPictInd = ind => dispatch(setPictIndDisp(ind))

    const pictIndex = pictIndexes[curInd]
    const pictDescr = data[pictIndex]

    const pathPict = `${process.env.PUBLIC_URL}${pictDescr.images.hero.small.substring(1)}`
    const pathArtist = `${process.env.PUBLIC_URL}${pictDescr.artist.image.substring(1)}`
    const pathContent = `${process.env.PUBLIC_URL}${pictDescr.images.gallery.substring(1)}`

    const prevBtnClass = isPrevEnabled ? '' : 'filter-lightgray'
    const nextBtnClass = isNextEnabled ? '' : 'filter-lightgray'

    const hrBlackLen = Math.round((curInd + 1) * 100 / pictIndexes.length)
    const hrBlackLenStyle = {width: `${hrBlackLen}%`}
    const hrGrayLen = 100 - hrBlackLen
    const hrGrayLenStyle = {width: `${hrGrayLen}%`}


    const [showPictView, setShowPictView] = useState(false)
    const prevPictureHandler = () => {
        if (isPrevEnabled) {
            setPictInd(curInd - 1)
        }
    }

    const nextPictureHandler = () => {
        if (isNextEnabled) {
            setPictInd(curInd + 1)
        }
    }


    return (
        <>
            <div className="detail">
                <div className="detail-info">
                    <div className="detail-info__pict-names">
                        <img src={pathPict} alt={pictDescr.name} className="detail-info__pict-names__picture" />
                        <div className="detail-info__pict-names__names__text">
                            <div className="detail-info__pict-names__names__text__title">{pictDescr.name}</div>
                            <div className="detail-info__pict-names__names__text__artist-name">{pictDescr.artist.name}</div>
                        </div>
                        <img src={pathArtist} alt="artist" className="detail-info__pict-names__artist" />
                    </div>
                    <div className="detail-info__description">
                        <div className="detail-info__description__year">{pictDescr.year}</div>
                        <p className="detail-info__description__text">{pictDescr.description}</p>
                        <div className="detail-info__description__show-src-btn" onClick={() => setShowPictView(true)}>GO TO SOURCE</div>
                    </div>

                </div>
                <div className="detail-divider">
                    <hr className='detail-divider__black' style={hrBlackLenStyle} />
                    <hr className='detail-divider__gray'style={hrGrayLenStyle} />
                </div>
                <div className="detail-buttons">
                    <div className="detail-buttons__texts">
                        <div className="detail-buttons__texts__pict-title">{pictDescr.name}</div>
                        <div className="detail-buttons__texts__artist-name">{pictDescr.artist.name}</div>
                    </div>
                    <div className="detail-buttons__buttons">
                        <img src={iconBack} alt="back" onClick={prevPictureHandler} className={prevBtnClass} />
                        <img src={iconNext} alt="next" onClick={nextPictureHandler} className={nextBtnClass} />
                    </div>
                </div>
            </div>
            {showPictView &&
            (<div className="pict-view">
                <div className="pict-view__content">
                    <div className="pict-view__content__close-btn" onClick={() => setShowPictView(false)}>CLOSE</div>
                    <img src={pathContent} alt="gallery" className='pict-view__content__image' />
                </div>
            </div>)}
        </>
    )
}

export default Detail