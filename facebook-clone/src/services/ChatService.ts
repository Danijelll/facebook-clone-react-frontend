import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const CHAT_URL = 'https://localhost:5001/chatHub'

class ChatService {
    sendMessage = async (user: string, message: string) => {
        console.log('aaaaaaaaaa');
        
        user= 'joe'
        message='this is my message'
        try {
            const connection = new HubConnectionBuilder()
                .withUrl(CHAT_URL)
                .configureLogging(LogLevel.Information)
                .build()

            connection.on("ReceiveMessage", (user, message) => {
                console.log('message', message);

            })

            await connection.start();
            await connection.invoke("SendMessage",user, message)

        } catch (error) {
            console.log(error);
        }
    }
}

export default new ChatService