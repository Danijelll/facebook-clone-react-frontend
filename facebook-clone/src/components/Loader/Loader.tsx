import './Loader.scss'

function Loader() {
  return (
    <div className='loader-background'>
        <div className='loader-item'>
            <img className='loader' src="/loader.gif" alt="loaderGif" />
            <p className='loader-text'>Loading..</p>
        </div>
    </div>
  )
}

export default Loader