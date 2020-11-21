const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ("tl!")
let statusChoice = ['hello this is linus bot but in js lol'];

client.once('ready', () => {
	console.log('om bot online and ready');
	setInterval(function(){
		let displayedStatus = statusChoice[Math.floor(Math.random()*statusChoice.length)];
		client.user.setPresence({
			status: 'online',
			activity:{
				name: displayedStatus
			}
		})
	},20000)
});

client.on('message', async message => 
	
	{if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'ping') {
		message.channel.send('Pong.');
	
	}




});

client.login(process.env.BOT_TOKEN);