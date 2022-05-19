import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { IMessageData } from '../interfaces/IMessage';

const CHAT_URL = 'https://localhost:5001/chatHub'

const connection = new HubConnectionBuilder()
  .withUrl(CHAT_URL)
  .configureLogging(LogLevel.Information)
  .build()

class ChatService {
  sendMessage = async (user: string, message: string) => {
    try {
      await connection.invoke("SendMessage",user , message);
    } catch (e) {
      console.log(e);
    }

  }

  connect = async () => {
    try {
      connection.on("ReceiveMessage", (user, message) => {
        console.log(user, message);
      })

      await connection.start();

    } catch (error) {
      console.log(error);
    }
  }

}

export default new ChatService