import express from 'express'
import { PORT, TOKEN } from './config.js'
import { Telegraf } from 'telegraf';
import { getMainMenu } from './keyboard.js';

const app = express();
const bot = new Telegraf(TOKEN);

bot.start(ctx => {
    ctx.reply('Hello, bro, why are you gay?', getMainMenu());
})

// bot.on('text', ctx => {
//     ctx.reply('Why are you gay?');
// })

bot.hears('i am not gay', ctx => {
    ctx.reply('WHY ARE YOU GAY?');
})

bot.command('time', ctx => {
    ctx.reply(String(new Date))
})

bot.launch()
app.listen(PORT, () => console.log(`server started at port ${PORT}...`));

// const token = '6408160220:AAFaY6FCSWI5GK1jA4MABcKaGz8LqwOOGNU';

// const bot = new TelegramBot(token, { polling: true });

// bot.toString('message', (message) => {
//     const chatId = message.chat.id;
//     bot.sendMessage(chatId, 'hello');
// });