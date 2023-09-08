import express from 'express'

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, why are you gay?');
});

app.listen(PORT, () => console.log(`server started at port ${PORT}...`));

// const token = '6408160220:AAFaY6FCSWI5GK1jA4MABcKaGz8LqwOOGNU';

// const bot = new TelegramBot(token, { polling: true });

// bot.toString('message', (message) => {
//     const chatId = message.chat.id;
//     bot.sendMessage(chatId, 'hello');
// });