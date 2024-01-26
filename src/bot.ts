import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import { token, clientId, channelId, guildId } from './config.json';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessageTyping,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.DirectMessageReactions,
		GatewayIntentBits.DirectMessageTyping,
	],
});

client.once('ready', () => {
	console.log(`Logged in as ${client.user?.tag}`);
	client.user?.setActivity(`Silly Bollocks`, {
		type: ActivityType.Playing,
	});
});

// ur mom sucks

client.login(token);
