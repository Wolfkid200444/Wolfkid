const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({
  disableEveryone: true
});
let config = require(`./config.json`);
let prefix = config.prefix;
client.commands = new Discord.Collection();


fs.readdir("./events/", (err, files) => {
  if (err) console.log(err);
  files.forEach(file => {
    let eventFunc = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunc.run(client, ...args));
  });
  fs.readdir(`./commands/general`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
      const eventFunc = require(`./commands/general/${file}`);
      let eventName = file.split(".")[0];
      client.commands.set(eventName, eventFunc);
    });
    fs.readdir(`./commands/fun`, (err, files) => {
      if (err) console.log(err);
      files.forEach(file => {
        const eventFunc = require(`./commands/fun/${file}`);
        let eventName = file.split(".")[0];
        client.commands.set(eventName, eventFunc);
      });
      fs.readdir(`./commands/image`, (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
          const eventFunc = require(`./commands/image/${file}`);
          let eventName = file.split(".")[0];
          client.commands.set(eventName, eventFunc);
        });
        fs.readdir(`./commands/mod`, (err, files) => {
          if (err) console.log(err);
          files.forEach(file => {
            const eventFunc = require(`./commands/mod/${file}`);
            let eventName = file.split(".")[0];
            client.commands.set(eventName, eventFunc);
          });
          fs.readdir(`./commands/owner`, (err, files) => {
            if (err) console.log(err);
            files.forEach(file => {
              const eventFunc = require(`./commands/owner/${file}`);
              let eventName = file.split(".")[0];
              client.commands.set(eventName, eventFunc);
            });
            fs.readdir(`./commands/info`, (err, files) => {
              if (err) console.log(err);
              files.forEach(file => {
                const eventFunc = require(`./commands/info/${file}`);
                let eventName = file.split(".")[0];
                client.commands.set(eventName, eventFunc);
              });
              fs.readdir(`./commands/nsfw`, (err, files) => {
                if (err) console.log(err);
                files.forEach(file => {
                  const eventFunc = require(`./commands/nsfw/${file}`);
                  let eventName = file.split(".")[0];
                  client.commands.set(eventName, eventFunc);
               });
             });
           });
         });
       });
    });
  });
});


client.login(BOT_TOKEN);