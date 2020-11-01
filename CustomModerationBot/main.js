const Discord = require('discord.js');
const client = new Discord.Client();

const {prefix, token} = require('./config.json');

const fs = require('fs');
const { PassThrough } = require('stream');
const { time } = require('console');


client.once('ready', () => {
console.log('The Advertisement Moderation Bot Is Online.')
});

let previousModerationMessage = ''

client.on('message', message =>{
    if(message.author.bot){
        return
    }
    

    if(message.channel.parentID == '771472391020609554' || (message.channel.parentID == '771821222601555988')){
        

        const advertisementReminderEmbed = new Discord.MessageEmbed()
        .setColor('#4bc8f1')
        .setTitle('**Remember**')
        .setDescription(":incoming_envelope: Send your ads to the correct channel\n:incoming_envelope: Don't post invite rewards or giveaway servers\n:incoming_envelope: Don't post anything that's harmful or breaks the discord TOS\n:incoming_envelope: You can post your ad unlimited times a day with one hour cooldown")
            if(previousModerationMessage != ''){
                message.channel.send(advertisementReminderEmbed).then(newEmbed => {
                    let PreviousMessage = message.channel.messages.fetch(previousModerationMessage).then(message => {
                        message.delete()
                        previousModerationMessage = newEmbed.id
                    })

            })

        } else{
            message.channel.send(advertisementReminderEmbed).then(newEmbed =>{
                previousModerationMessage = newEmbed.id
            })
        }


    }
});

client.login(token);