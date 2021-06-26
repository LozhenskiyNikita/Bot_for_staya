const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() 
{
	gamedig.query({type: 'dayz', host: '185.189.255.107', port: '2302'
		}).then((state) => {
			bot.user.setActivity(`ОНЛАЙН: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(`СЕРВЕР ОТКЛЮЧЁН`, {type: 0});
		});
}
bot.login(process.env.BOT_TOKEN)
bot.on('ready', async () => {
	console.log('BOT for ParadiseDayz IS WORKING')
	online()
	setInterval(online, 10000)
});

//185.189.255.107:2302
