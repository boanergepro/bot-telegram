const telegramBot = require('node-telegram-bot-api')

const token = '416976554:AAFaGFd_3FpW-GEGPrfN98Uze8ThfdJb8NU'

const bot = new telegramBot(token, { polling: true})

bot.on('text', (msg) => {
	let chatId = msg.chat.id

	bot.sendMessage(chatId, `Hola ${msg.from.first_name}.`)
})

//username del bot @chiguireone_bot