import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { addNewCurrentError } from '../features/Error/ErrorSlice';
import { addMessage } from '../features/Messages/MessageSlice';
import { showErrorModal } from '../features/Ui/UiSlice';
import { IErrorData } from '../interfaces/IError';
import { ICreateMessageData, IMessageData } from '../interfaces/IMessage';
import axios from './axios';

const CHAT_URL = 'https://localhost:5001/chatHub'

const connection = new HubConnectionBuilder()
  .withUrl(CHAT_URL)
  .configureLogging(LogLevel.Information)
  .build()

class ChatService {
  store: any;

  injectStore(store: any) {
    this.store = store;
  }

  sendMessage(message: ICreateMessageData) {
    return axios.post('/messages', message)
      .then((response) => {
        if (response.status === 200) {
         connection.invoke("SendMessage", message.senderId, message.receiverId, message.message1);
          return response.data;
        }
      }).catch((error) => {
        console.log(error);
        const errorData: IErrorData = {
          errorMessage: error.response.data.message,
          errorStatus: error.response.status
        }
        this.store.dispatch(addNewCurrentError(errorData))
        this.store.dispatch(showErrorModal())
      });
  }

  getMessages(receiverId:number){
    return axios.get('/messages/'+ receiverId)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      }).catch((error) => {
        console.log(error);
        const errorData: IErrorData = {
          errorMessage: error.response.data.message,
          errorStatus: error.response.status
        }
        this.store.dispatch(addNewCurrentError(errorData))
        this.store.dispatch(showErrorModal())
      });
  }

  receiveMessages = async () => {
    try {
      connection.on("ReceiveMessage", (messageDTO) => {
        this.store.dispatch(addMessage(messageDTO))
      })

    } catch (error) {
      console.log(error);
    }
  }

  connect = async (name: string) => {
    try {
      await connection.start().then(() => {
        connection.invoke("OnConnected", (name))
      });
    } catch (error) {
      console.log(error);
    }
  }

}

export default new ChatService