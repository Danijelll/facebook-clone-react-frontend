import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const CHAT_URL = 'https://localhost:5001/chatHub'

const connection = new HubConnectionBuilder()
  .withUrl(CHAT_URL)
  .configureLogging(LogLevel.Information)
  .build()

class ChatService {
  sendMessage = async (sender: string, receiver: string, message: string) => {
    try {
      await connection.invoke("SendMessage", sender, receiver, message);      
    } catch (e) {
      console.log(e);
    }

  }

  connect = async (name:string) => {
    try {
      connection.on("ReceiveMessage", (sender, message) => {        
        console.log(sender, message);
      })

      await connection.start().then(() =>{
        connection.invoke("OnConnected",(name))
      });

    } catch (error) {
      console.log(error);
    }
  }

}

export default new ChatService