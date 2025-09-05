import data from '../data.json'

const Gallery = () => {
  const cols = [
    [0, 4, 8, 11],
    [1, 5, 9, 12],
    [2, 6, 13],
    [3, 7, 10, 14],
  ]

  return (
    <div className="gallery">
      <GalleryColumn key={0} id="gc0" inds={cols[0]} />
      <GalleryColumn key={1} id="gc1" inds={cols[1]} />
      <GalleryColumn key={2} id="gc2" inds={cols[2]} />
      <GalleryColumn key={3} id="gc3" inds={cols[3]} />
    </div>
  )
}

export default Gallery

interface GalleryColumnProps {
  inds: number[]
  id: string
}

const GalleryColumn = ({ inds, id }: GalleryColumnProps) => {
  return (
    <div className="gallery__column" id={id}>
      {inds.map((ind) => (
        <GalleryItem key={ind} ind={ind} />
      ))}
    </div>
  )
}

interface GalleryItemProps {
  ind: number
}

const GalleryItem = ({ ind }: GalleryItemProps) => {
  const path = `${process.env.PUBLIC_URL}${data[ind].images.thumbnail.substring(
    1
  )}`

  return (
    <div className="gallery__column__item">
      <img src={path} alt={data[ind].name} />
      <div className="gallery__column__item__picture-name">
        {data[ind].name}
      </div>
      <div className="gallery__column__item__artist-name">
        {data[ind].artist.name}
      </div>
    </div>
  )
}
