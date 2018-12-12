const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("💻 Server Name", message.guild.name)
    .addField("▶ Created On", message.guild.createdAt)
    .addField("▶ You Joined", message.member.joinedAt)
    .addField("👥 Total Members", message.guild.memberCount)
    .addField("🙂 Default Role", message.guild.defaultRole)
    .addField("🤴 Server Owner", message.guild.owner)
    .addField(":page_with_curl: Roles", `${message.guild.roles.filter(r => r.position !== 0).map(R => R.name).join(', ')}`, true)
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
