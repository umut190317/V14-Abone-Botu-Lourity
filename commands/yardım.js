const { EmbedBuilder } = require("discord.js");
const Discord = require('discord.js');
const config = require("../config.js")
let prefix = config.prefix
exports.run = async (client, message, args) => {

  const row = new Discord.ActionRowBuilder()

    .addComponents(
      new Discord.ButtonBuilder()
        .setEmoji("🚀")
        .setLabel("Botu Ekle")
        .setStyle(Discord.ButtonStyle.Link)
        .setURL("https://discord.com/botdavetlinkin")
    )

    .addComponents(
      new Discord.ButtonBuilder()
        .setEmoji("📌")
        .setLabel("Argümanlar")
        .setStyle(Discord.ButtonStyle.Secondary)
        .setCustomId("arguman")
    )
  const embed = new EmbedBuilder()
    .setTitle("Lourity Tester")
    .addFields(
      { name: `${prefix}hoşgeldin-kanal`, value: 'Hoşgeldin mesajının atılacağı kanalı ayarlarsınız.', inline: true },
      { name: `${prefix}hoşgeldin-giriş-mesaj`, value: 'Hoşgeldin kanalına atılacak giriş mesajını ayarlarsınız.', inline: true },
      { name: `${prefix}hoşgeldin-çıkış-mesaj`, value: 'Hoşgeldin kanalına atılacak çıkış mesajını ayarlarsınız.', inline: true },
      { name: `${prefix}argümanlar`, value: 'Hoşgeldin mesajlarındaki argümanları gösterir.' },
    )
    .setColor("Green")
    .setFooter({ text: "Lourity - Hoşgeldin Mesaj Sistemi" })
    .setTimestamp()
  return message.channel.send({ embeds: [embed], components: [row] });

};
exports.conf = {
  aliases: ["help"]
};

exports.help = {
  name: "yardım"
};