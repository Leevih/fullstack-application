import React, { useEffect } from 'react';

import { useDispatch, connect } from 'react-redux'

import main_service from './services/main_service'

import { fecthImages } from './actions/image.action'

import Image from './components/image'

const App = (props) => {
const dispatch = useDispatch()
const { images } = props
  useEffect(() => {
    main_service.getAll()
    .then((res) => dispatch(fecthImages(res.data)))
  }, [])
  return (
    <div>
      {images && images.map(item => <Image content={item} />)}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { images } = state
  return {
    images
  }
}

export default connect(mapStateToProps)(App)
