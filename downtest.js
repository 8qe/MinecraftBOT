const mineflayer = require('mineflayer')
var D = require('discord.js')
var client = new D.Client({
    intents: [
    D.Intents.FLAGS.GUILDS,
    D.Intents.FLAGS.GUILD_MESSAGES
    ]
})
let Config = require('./config.json')
let prefix = Config.DPrefix
var Prefixx = Config.Prefix

let bot1
let bot2
let bot3
let isbotexist = false

function TurnOnBot(ip, version, port, client , msg) {
  if (isbotexist == true) return msg.channel.send('There is a Bot Already Running Cancel the bot using the Command -leave NOT WORKING YET!')
    var Random1 = Math.floor(Math.random() * 1000000) + 1;
    var Random2 = Math.floor(Math.random() * 1000000) + 1;
    var Random3 = Math.floor(Math.random() * 1000000) + 1;
    var User1 = Prefixx+Random1
    var User2 = Prefixx+Random2
    var User3 = Prefixx+Random3
    var JC = "/register relandor relandor"
    var JC1 = "pele"
    bot1 = mineflayer.createBot({
        host: ip,
        port: port,
        username: User1,
        version: version
      }) 
      bot2 = mineflayer.createBot({
        host: ip,
        port: port,
        username: User2,
        version: version
      }) 
      bot3 = mineflayer.createBot({
        host: ip,
        port: port,
        username: User3,
        version: version
      })
      function chatmsg1() {
        setTimeout(chatmsg1, 2000)
      bot1.chat(JC)
      }
      function chatmsg2() {
        setTimeout(chatmsg2, 2000)
      bot2.chat(JC)
      }
      function chatmsg3() {
        setTimeout(chatmsg3, 2000)
         bot3.chat(JC)
         }
         function chatmsg4() {
        setTimeout(chatmsg4, 4500)
        bot1.chat(JC1)
        }
        function chatmsg5() {
          setTimeout(chatmsg5, 4500)
        bot2.chat(JC1)
        }
        function chatmsg6() {
          setTimeout(chatmsg6, 4500)
        bot3.chat(JC1)
        }
        bot1.once('login', chatmsg1)
        bot2.once('login', chatmsg2)
        bot3.once('login', chatmsg3)

        bot1.once('login', chatmsg4)
        bot2.once('login', chatmsg5)
        bot3.once('login', chatmsg6)

        bot1.once('login', async () => {
            console.log('bot1 is on')
          })
        
          bot2.once('login', async () => {
            console.log('bot2 is on')
          })
        
          bot3.once('login', async () => {
        console.log('bot3 is on')
        })
        bot1.on("kicked", console.log);
        bot2.on("kicked", console.log);
        bot3.on("kicked", console.log);
        bot1.on('chat', (username, message) => {
          if (message === '-Discord') {
                bot1.chat('Status je Online' + username)
                bot2.chat('Status je Online' + username)
                bot3.chat('Status je Online' + username)
      }
      if (message === '-Status') {
            bot1.chat('Status botů je v OK' + username)
            bot2.chat('Status botů je v OK' + username)
            bot3.chat('Status botů je v OK' + username)
  }
       if (message === '-tpa') {
          bot.chat('/tpa ' + username)
       }
      })
       isbotexist = true
    }
    function leave(msg){
      isbotexist = false
      bot1.end()
      bot2.end()
      bot3.end()
      bot1.on("end", function(){
        msg.channel.send("The Bot Has Successfully ended, You can now use the Bots Again.")
      })
    }
    client.on('message', msg => {
      if (!msg.content.startsWith(prefix)) return
      args = msg.content.slice(prefix.length).split(/ +/);
      command = args.shift().toLowerCase();

    if(command == "join") {
        TurnOnBot(args[0], args[1], args[2], client, msg)
        }
        if (command == "leave"){
          leave(msg)
        }
        if(isbotexist == true){
        if(command == "m") {
          const chat = args.join(" ")
          bot1.chat('[Discord_Chat] >> ' + chat)
          bot2.chat('[Discord_Chat] >> ' + chat)
          bot3.chat('[Discord_Chat] >> ' + chat)
          msg.channel.messages.fetch().then((results) => {
              msg.channel.bulkDelete(results)
          })
      }
      if(command == "cmd") {
          const chat = args.join(" ")
          bot1.chat('/' + chat)
          bot2.chat('/' + chat)
          bot3.chat('/' + chat)
          msg.channel.messages.fetch().then((results) => {
              msg.channel.bulkDelete(results)
          })
      }
      if(command == "clear") {
              msg.channel.messages.fetch().then((results) => {
              msg.channel.bulkDelete(results)
              })
      }
      if(command == "c") {
          const chat = args.join(" ")
          bot1.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          bot2.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          bot3.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          bot1.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          bot2.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          bot3.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          bot1.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          bot2.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          bot3.chat(Math.floor(Math.random() * 10000000) + 1 + ' Připoj se k nám! Měj svoje Boty! ' + Math.floor(Math.random() * 10000000) + 1)
          msg.channel.messages.fetch().then((results) => {
              msg.channel.bulkDelete(results)
          })
        }
      }
    })

    
          client.on('ready', async () => {
            console.log('Discord Bot Online.')
        })
        
        client.login("ODk3OTA1NDEwMTg1NDk0NjA4.YWcdlA.tFvXp69_o03q1DOwpHhOUhmh1Eg")
        .catch(error => {
            console.log('Cannot Login into the Account')
        })