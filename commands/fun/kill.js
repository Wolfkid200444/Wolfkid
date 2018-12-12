const Discord = require('discord.js');
const config = require('../config.json');

message.delete();
if (!member) {
  var killWhereArgs = Math.floor(Math.random() * killer.argsKill.length);
  var killEmbed = new Discord.RichEmbed()
.setTitle('Missing Arguments')
.setDescription('🗡' + killer.argsKill[killWhereArgs])
.setColor('RANDOM')
.setTimestamp(new Date())
    .setFooter('Usage: /kill <@user>')
sendEmbed(message.channel, killEmbed);
  return;
}
var killNow = Math.floor(Math.random() * killer.killMessage.length);
var killed = new Discord.RichEmbed()
.setDescription(`${message.author.username} **has killed** ${member.user.username}${killer.killMessage[killNow]}`)
.setColor('RANDOM')
.setTimestamp(new Date())
message.channel.send(`🗡 Killing ${member.user.username}...`).then(message => {
  message.delete(6000).then(() => message.channel.send(killed));
});

module.exports.help = {
	name: "kill"
}
