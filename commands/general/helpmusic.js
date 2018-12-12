const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      let musicembed = new Discord.RichEmbed()
      .setTitle('List of Commands | prefix f; | Music List ')
      .setDescription('There is 3 Available Commands ')
      .addField('📕 GENERAL', '``play, skip, queue ``')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag} | Music list`, `${message.author.avatarURL}`)
      return message.channel.send(musicembed);

}
 
module.exports.help = {
  name: "help_music"
}
