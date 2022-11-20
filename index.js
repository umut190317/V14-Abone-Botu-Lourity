const { Client, GatewayIntentBits, Partials, ButtonBuilder, ButtonStyle, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const db = require("croxydb")
const client = new Client({
    intents: INTENTS,
    allowedMentions: {
        parse: ["users"]
    },
    partials: PARTIALS,
    retryLimit: 3
});

global.client = client;
client.commands = (global.commands = []);

client.login("MTAxMjEwNzc3MzA4Mjg3Nzk4Mg.GMXy7G.We68OP-wULHBajZb0zeVtg5vvfAv7Yx-eSoszU")
console.log("[LOGİN] Giriş Başarılı!")

client.on("messageCreate", async message => {
  if (message.author?.bot) return
let channel = "1030944893117399060"
  if(message.channel.id !== channel) return; 
 const file = message.attachments.first()
 if (!file) return;
  message.delete()
  const row = new Discord.ActionRowBuilder()
  .addComponents(
  new Discord.ButtonBuilder()
  .setLabel("Abone Rolü Ver!")
  .setStyle(Discord.ButtonStyle.Success)
  .setCustomId("abone"),
    new Discord.ButtonBuilder()
    .setLabel("Beğeni Yok")
    .setStyle(Discord.ButtonStyle.Danger)
    .setCustomId("beğeni"),
    new Discord.ButtonBuilder()
    .setLabel("Yorum Yok")
    .setStyle(Discord.ButtonStyle.Danger)
    .setCustomId("yorum"),
        new Discord.ButtonBuilder()
.        setLabel("Abone Yok")
    .setStyle(Discord.ButtonStyle.Danger)
    .setCustomId("aboneyok"),
        new Discord.ButtonBuilder()
.setLabel("Kabul Etme")
.setStyle(Discord.ButtonStyle.Danger)
    .setCustomId("kabul")
  )
  let log = "1030944836594978937"

    const gonderi = new Discord.EmbedBuilder()
    .setTitle("Başarıyla Gönderildi!")
    .setDescription("<@"+message.author.id+">, başarıyla abone fotoğrafın yetkililere gönderildi!")
    .setFooter({text: "Lourity Code"})
    .setColor("Yellow")

  client.channels.cache.get(log).send({files: [file], components: [row], content: "<@1018443613564313604>"}).then((mesaj) => {
  db.set(`kullanıcı_${mesaj.id}`, message.author.id)
  message.author.send({ embeds: [gonderi] }).catch(err => {message.channel.send({ embeds: [gonderi] })})
})
                                                                                   })

        client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
            let message = await interaction.channel.messages.fetch(interaction.message.id)
          if(interaction.customId === "abone") {
            const abone = new Discord.EmbedBuilder()
            .setTitle("Abone Rolün Verildi!")
            .setDescription("<@"+message.author.id+">, abone rolün verildi dostum <:kedy:1018609379521597521>")
            .setFooter({text: "Lourity Code"})
            .setColor("Green")

            let rol = "1018398427350040616"
            let usır = db.fetch(`kullanıcı_${interaction.message.id}`)
            message.delete()
            message.guild.members.cache.get(usır).roles.add(rol)
            let rol2 = "1018398427350040616"

client.channels.cache.get(rol2).send({ content: "<@"+usır+">", embeds: [abone] })
          }
            if(interaction.customId === "beğeni") {
              const begeni = new Discord.EmbedBuilder()
              .setTitle("Beğeni Eksik!")
              .setDescription("<@"+message.author.id+">, fotoğrafında beğeni eksik, lütfen tekrar gönder.")
              .setFooter({text: "Lourity Code"})
              .setColor("Red")

            let rol = "1018398427350040616"
                        let usır = db.fetch(`kullanıcı_${interaction.message.id}`)
            message.delete()
client.channels.cache.get(rol).send({ content: "<@"+usır+">", embeds: [begeni] })
          }
             if(interaction.customId === "yorum") {
              const yorum = new Discord.EmbedBuilder()
              .setTitle("Yorum Eksik!")
              .setDescription("<@"+message.author.id+">, fotoğrafında yorum eksik, lütfen tekrar gönder.")
              .setFooter({text: "Lourity Code"})
              .setColor("Red")

            let rol = "1018443614222811155"
                        let usır = db.fetch(`kullanıcı_${interaction.message.id}`)
            message.delete()
client.channels.cache.get(rol).send({ content: "<@"+usır+">", embeds: [yorum] })
          }
             if(interaction.customId === "aboneyok") {
              const abone = new Discord.EmbedBuilder()
              .setTitle("Abone Eksik!")
              .setDescription("<@"+message.author.id+">, fotoğrafında abone eksik, lütfen tekrar gönder.")
              .setFooter({text: "Lourity Code"})
              .setColor("Red")

            let rol = "1018443614222811155"
                        let usır = db.fetch(`kullanıcı_${interaction.message.id}`)
            message.delete()
client.channels.cache.get(rol).send({ content: "<@"+usır+">", embeds: [abone] })
          }
        })



const modal = new ModalBuilder()
.setCustomId('form')
.setTitle('Lourity Code')
  const a1 = new TextInputBuilder()
  .setCustomId('red')
  .setLabel('Neden Reddediyorsun?')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(2)
  .setPlaceholder('Lütfen reddetme sebebini girin.')
  .setRequired(true)

    const row = new ActionRowBuilder().addComponents(a1);
  
    modal.addComponents(row);
  
   
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "kabul"){
    await interaction.showModal(modal);
	}
})
 
    client.on('interactionCreate', async interaction => {
      if (interaction.type !== InteractionType.ModalSubmit) return;
                  let message = await interaction.channel.messages.fetch(interaction.message.id)
      if (interaction.customId === 'form') {
        		const sebep = interaction.fields.getTextInputValue('red')
            let rol = "1018398427350040616"
                        let usır = db.fetch(`kullanıcı_${interaction.message.id}`)
            message.delete()
            const form = new Discord.EmbedBuilder()
            .setTitle("Reddedildi!")
            .setDescription("<@"+usır+">, fotoğrafın reddedildi! Nedeni: **"+sebep+"**")
            .setFooter({text: "Lourity Code"})
            .setColor("Red")
    
            const form1 = new Discord.EmbedBuilder()
            .setTitle("Reddedildi!")
            .setDescription("Fotoğraf başarıyla reddedildi! Nedeni: **"+sebep+"**")
            .setFooter({text: "Lourity Code"})
            .setColor("Green")

client.channels.cache.get(rol).send({ content: "<@"+usır+">", embeds: [form] })
        interaction.reply({ embeds: [form1], ephemeral: true })
          }
    
    })
