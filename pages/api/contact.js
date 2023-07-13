import axios from 'axios';

const TOKEN = '5988811852:AAFens5-O5ay-5r16kGKWN62Tm03y0fF-n0';
const chatId = 542880503;

export async function sendTelegramMessage(chatId = chatId, message) {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        chat_id: chatId,
        text: message,
      }
    );

    if (response.status === 200) {
      console.log('Message sent successfully');
    } else {
      console.error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
}
async function getTelegramMessage() {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TOKEN}/getUpdates`,
      {
        chat_id: chatId,
        text: message,
      }
    );

    if (response.status === 200) {
      console.log('Message sent successfully');
    } else {
      console.error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

export default function handler(req, res) {
  const body = req.body;
  if (!body.message) {
    return res.status(400).json({ data: 'В сообщение ничего нет' });
  }
  try {
    sendTelegramMessage(chatId, JSON.stringify(body));
  } catch (error) {
    return res.status(500).json({ data: 'Сообщение не было доставлено' });
  }

  return res.status(200).json({ data: 'Сообщение было доставлено' });
}
