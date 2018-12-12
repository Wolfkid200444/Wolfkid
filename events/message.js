module.exports.run = async(client, message) => {
    //Anti advertise function 12/08/18 - Ducky





    //Message.js update 12/08/18 - Ducky
    var prefix = "v!";
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    if(!cmd) return;
    cmd.run(client, message, args);
};