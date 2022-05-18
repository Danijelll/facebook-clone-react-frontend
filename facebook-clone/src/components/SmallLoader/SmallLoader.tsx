import './SmallLoader.scss'

function SmallLoader() {
  return (
    <div className='small-loader-background'>

      <div className='small-loader-item'>
        <img className='small-loader' src="/loader.gif" alt="loaderGif" />
        <p className='small-loader-text'>Loading..</p>
      </div>

    </div>
  )
}

export default SmallLoader