import './UserSearch.scss'

function UserSearch() {
  return (
    <div id='user-search-wrapper'>
        <div id='user-search-header'>
            <input id='user-search-input' placeholder='Search...' type="text" />
            <img id='user-search-svg' src="../../../../search.svg" alt="" />
        </div>
    </div>
  )
}

export default UserSearch