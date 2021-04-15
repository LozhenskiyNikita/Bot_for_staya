const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() 
{
	gamedig.query({type: 'dayz', host: '212.22.92.9', port: '2303'
		}).then((state) => {
			bot.user.setActivity(` Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(` Сервер offline`, {type: 0});
		});
}
bot.login("ODMyMjg0MjUwMzMzMzgwNjM4.YHhjHA.B12I7QrmrZ3n9B9QAU3ZbsieJmk")
bot.on('ready', async () => {
	console.log('BOT for ADR IS WORKING')
	online()
	setInterval(online, 10000)
});