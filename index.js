const Discord = require('discord.js')

var bot = new Discord.Client();
var prefix = ("sb!");
var randnum = 0;
var randnum2 = 0;
var party_launch = false;

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: 'sb!help : Bot by Pamort58', type: 0}})
    console.log(`Je suis près !`)
});

bot.login(process.env.TOKEN)

bot.on("guildMemberAdd", member => {
    //let vip = member.guild.roles.find("name", "-= VIP =-")
    let joueur = member.guild.roles.find("name", "-= Joueur =-")
    member.guild.channels.find("name", "bienvenue").send(`${member.user.username} viens d'arrivé sur le serveur`)
    //member.addRole(vip)
    member.addRole(joueur)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member.user.username} viens de quitter le  serveur`)
});

bot.on('message', message => {
    
    if(message.content === prefix + "help") {
        var aide_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`:robot: Voici mes catégories d'aide !`)
        .setDescription(`Voici mes commandes disponible :`)
        .setThumbnail(message.author.avatarURL)
        .addField(":tools: Modération", "Fais `" + prefix + "*mod` pour voir mes commandes de modération !")
        .addField(":tada: Fun", "Fais `" + prefix + "*fun` pour voir mes commandes d'animation !")
        .setFooter("Menu d'aide - By Pamort58")
        .setTimestamp()
        message.channel.send(aide_embed);
      }
   
      if(message.content === prefix + "mod") {
        var mod_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`:tools: Voici mes commandes modérations !`)
        .setThumbnail(message.author.avatarURL)
        .addField(prefix + "kick <@user>", "Kick l'utilisateur !")
        .addField(prefix + "ban <@user>", "Ban l'utilisateur !")
        .addField(prefix + "clear nombre", "Supprime le nombre de messages indiqué")
        .addField(prefix + "mute <@user>", "Mute l'utilisateur mentionné")
        .addField(prefix + "unmute <@user>", "Unmute l'utilisateur mentionné")
        .setFooter("Commande modération - By Pamort58")
        .setTimestamp()
        message.channel.send(mod_embed);
      }
   
      if(message.content === prefix + "fun") {
        var fun_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`:tada: Voici mes commandes amusantes !`)
        .setThumbnail(message.author.avatarURL)
        .addField(prefix + "pileface", "Le bot fait un pile ou face !")
        .addField(prefix + "numbergame", "Le bot choisi un nombre, à toi de le deviner !")
        .setFooter("Commande Fun - By Pamort58")
        .setTimestamp()
        message.channel.send(fun_embed);
      }

    if(message.content.startsWith(prefix + "pileface")) {
        randnum2 = Math.floor(Math.random() * (2 - 0) + 0)

        if(randnum2 === 0){
            message.channel.send("Tu viens d'obtenir un : **Pile** !")
        }else{
            message.channel.send("tu viens d'obtenir un : **Face** !")
        }

        console.log(randnum2);
    }

    if(message.content.startsWith(prefix + "numbergame")) {
        if(!message.guild.member(message.author).roles.find("name", "-= Animateur =-")) return message.channel.send(`Désolé ${message.author.username}, il faut être Animateur pour faire cette commande.`);
            var numgame_embed = new Discord.RichEmbed()
            .setColor('753951')
            .addField(prefix + "numbergame", "Voir les commandes pour le jeu :tada:")
            .addField(prefix + "start numbergame", "commencer le jeu :video_game:")
            .addField(prefix + "stop numbergame", "finir le jeu")
            .setFooter("By Pamort58")
        message.channel.sendEmbed(numgame_embed)
    }

    if(message.content.startsWith(prefix + "start numbergame")) {
        if(!message.guild.member(message.author).roles.find("name", "-= Animateur =-")) return message.channel.send(`Désolé ${message.author.username}, il faut être Animateur pour faire cette commande.`);
            message.channel.send(`:tada: @everyone, une partie viens d'être lancé par ${message.author.username} !`)

            party_launch = true;

            randnum = Math.floor(Math.random() * (2500 - 0) + 0)

            console.log(randnum);
    }

    if(party_launch && message.content != null){

        if(Number.isInteger(parseInt(message.content))){

            if(message.content > randnum){

                message.channel.send(`désolé ${message.author.username} le nombre est plus petit !`)

            }

            else if(message.content < randnum){

                message.channel.send(`désolé ${message.author.username} le nombre est plus grand !`)

            }

            else{

                message.channel.send(`Bien joué à ${message.author.username}, le nombre était ${randnum}`)
                party_launch = false;

            }

        }
    }

    if(message.content.startsWith(prefix + "stop numbergame")) {
        if(!message.guild.member(message.author).roles.find("name", "-= Animateur =-")) return message.channel.send(`Désolé ${message.author.username}, il faut être Animateur pour faire cette commande.`);
            if(party_launch == true){
                message.channel.send(`:weary: La partie viens d'être arrêté par ${message.author.username} !`)
    
                party_launch = false;
            }else {
                message.channel.send(`:cry: désolé ${message.author.name} mais aucune partie n'a été lancé !`) 
            }
    }
            
});
