import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './features/store';
import UserService from './services/UserService';
import AlbumService from './services/AlbumService';
import CommentService from './services/CommentService';
import FriendshipService from './services/FriendshipService';
import ImageService from './services/ImageService';
import ChatService from './services/ChatService';



UserService.injectStore(store);
AlbumService.injectStore(store);
CommentService.injectStore(store);
FriendshipService.injectStore(store);
ImageService.injectStore(store);
ChatService.injectStore(store);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

reportWebVitals();
