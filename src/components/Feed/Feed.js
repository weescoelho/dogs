import React from 'react'
import FeedPhotos from './FeedPhotos/FeedPhotos'
import FeedModal from './FeedModal/FeedModal'

const Feed = () => {

  const [modalPhoto, setModalPhoto] = React.useState(null)

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>
  )
}

export default Feed
