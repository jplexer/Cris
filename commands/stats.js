const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require('discord.js');

exports.run = async(client, message, args) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
  .setAuthor(`Cris`, client.user.avatarURL)
  .setDescription(`Stats`)
  .setColor(0x16ff00)
  .addField(`Mem Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true )
  .addField(`Uptime`, `${duration}`, true )
  .addField(`Users`, `${client.users.size.toLocaleString()}`, true )
  .addField(`Servers`, `${client.guilds.size.toLocaleString()}`, true )
  .addField(`Channels`, `${client.channels.size.toLocaleString()}`, true )
  .addField(`Discord.js`, `v${version}`, true )
  .addField(`Node`, `${process.version}`, true )
  .setFooter('Designed and Programed by Swingin30, Alee, TechLion and JPlexer Copyright 2019, Licensed with GPL-3.0');
  await message.channel.send({ embed });
};

exports.help = {
  name: "stats",
  category: "System",
  description: "Gives some useful bot statistics",
  usage: "stats"
};