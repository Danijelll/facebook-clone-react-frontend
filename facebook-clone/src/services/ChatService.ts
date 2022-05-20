import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useDispatch } from 'react-redux';
import { addMessage } from '../features/Messages/MessageSlice';
import { IMessageData } from '../interfaces/IMessage';

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

  sendMessage = async (sender: string, receiver: string, message: string) => {
    try {
      await connection.invoke("SendMessage", sender, receiver, message);
    } catch (e) {
      console.log(e);
    }
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