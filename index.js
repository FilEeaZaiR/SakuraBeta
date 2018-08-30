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

function random(min, max) {
    min = Math.ceil(1);
    max = Math.floor(10)
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

bot.login(process.env.TOKEN)

bot.on("guildMemberAdd", member => {
    //let vip = member.guild.roles.find("name", "-= VIP =-")
    let joueur = member.guild.roles.find("name", "↘ Visiteur ↙")
    member.guild.channels.find("name", "★bienvenue★").send(`${member.user.username} viens d'arrivé sur le serveur`)
    //member.addRole(vip)
    member.addRole(joueur)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "★bienvenue★").send(`${member.user.username} viens de quitter le  serveur`)
});

bot.on('message', message => {
   
    if (message.content === prefix + "infos") {
        var infos_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Voici quelques infos sur le bot et le serveur")
        .setThumbnail(message.author.avatarURL)
        .addField("Nom du bot :robot: :", `${client.user.tag}`, true)
        .addField("Descriminateur du bot :hash: :", `#${client.user.discriminator}`)
        .addField("ID du bot :id: :", `${client.user.id}`)
        .addField("Nombre de bots :", message.guild.members.filter(m => m.user.bot).size)
        .addField("Nombre de membres :", message.guild.members.filter(m => !m.user.bot).size)
        .addField("Nombre de membres en ligne", message.guild.members.filter(m => m.presence.status === 'online').filter(m => !m.user.bot).size)
        .addField("Nombre de membres hors ligne", message.guild.members.filter(m => m.presence.status === 'offline').filter(m => !m.user.bot).size)
        .addField("Nombre de catégories :", message.guild.channels.filter(chan => chan.type === 'category').size)
        .addField("Nombre de salons textuels :", message.guild.channels.filter(chan => chan.type === 'text').size)
        .addField("Nombre de salons vocaux :", message.guild.channels.filter(chan => chan.type === 'voice').size)
        .addField("Nombre de catégories et de salons :", message.guild.channels.size)
        .setFooter("Menu des infos")
        message.channel.send(infos_embed)
        console.log("un membre à éxécuter la commande pour afficher le menu d'infos")
    }
    
    if(message.content.startsWith(prefix + "orange")){

        let membre = message.guild.member(message.author);

        let role = message.guild.roles.find("name", "Orange")

        membre.addRole(role).catch(console.error);

        message.channel.send(`${membre} a maintenant le rôle ${role} ! :tada: `)

    }

    if(message.content.startsWith(prefix + "red")){

        let membre = message.guild.member(message.author);

        let role = message.guild.roles.find("name", "Red")

        membre.addRole(role).catch(console.error);

        message.channel.send(`${membre} a maintenant le rôle ${role} ! :tada: `)

    }
    if(message.content.startsWith(prefix + "bleu")){

        let membre = message.guild.member(message.author);

        let role = message.guild.roles.find("name", "Bleu")

        membre.addRole(role).catch(console.error);

        message.channel.send(`${membre} a maintenant le rôle ${role} ! :tada: `)

    }
    if(message.content.startsWith(prefix + "jaune")){

        let membre = message.guild.member(message.author);

        let role = message.guild.roles.find("name", "Jaune")

        membre.addRole(role).catch(console.error);

        message.channel.send(`${membre} a maintenant le rôle ${role} ! :tada: `)

    }
    if(message.content.startsWith(prefix + "vert")){

        let membre = message.guild.member(message.author);

        let role = message.guild.roles.find("name", "Vert")

        membre.addRole(role).catch(console.error);

        message.channel.send(`${membre} a maintenant le rôle ${role} ! :tada: `)

    }
    if(message.content.startsWith(prefix + "rose")){

        let membre = message.guild.member(message.author);

        let role = message.guild.roles.find("name", "Rose")

        membre.addRole(role).catch(console.error);

        message.channel.send(`${membre} a maintenant le rôle ${role} ! :tada: `)

    }
    if(message.content.startsWith(prefix + "violet")){

        let membre = message.guild.member(message.author);

        let role = message.guild.roles.find("name", "Violet")

        membre.addRole(role).catch(console.error);

        message.channel.send(`${membre} a maintenant le rôle ${role} ! :tada: `)

    }
});
