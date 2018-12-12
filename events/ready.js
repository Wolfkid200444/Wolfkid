let status = require(`../resources/status.json`);
let activity = require(`../resources/activity.json`);

module.exports.run = async (client, message, args) => {
    setInterval(() => {
        const onStatusInterval = Math.floor(Math.random() * (status.stats.length - 1) + 1);
        client.user.setStatus(status.stats[onStatusInterval]);
    }, 1000);
    setInterval(() => {
        const onInterval = Math.floor(Math.random() * (activity.games.length - 1) + 1);
        client.user.setActivity(activity.games[onInterval], {
            type: 'STREAMING'
        });
    }, 9000);
    console.log(" ###   #     #  #     #####  #     #  #####");
    console.log("#   #  # #   #  #       #    # #   #  #");
    console.log("#   #  #  #  #  #       #    #  #  #  ####");
    console.log("#   #  #   # #  #       #    #   # #  #");
    console.log(" ###   #     #  ####  #####  #     #  #####");
    console.log(`Bot name ${client.user.username}`);
};