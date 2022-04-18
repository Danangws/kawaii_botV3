const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, text }) => {
let logo = global.logoowner
  let ext= `
*───────[ BIODATA OWNER ]───────*
*💌 Nama* : D'ANANG WIJAYA SAPUTRA
*✉️ Nama RL* : D'anang.W.S™√
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 26 mei 2001
*🎨 Umur* : 21
*🧮 Status* : Lajang
*🧩 Hobby* : Nonton anime, main game, kerja, makan, tidur, napas
*💬 Sifat* : Baik, Ramah, Softboy, Suka Menolong, Tidak Sombong
*🗺️ Tinggal* : Indonesia, Jawa Tengah, Semarang
*❤️ Suka* : warnah pink & biru, anime, waifu wangy, kucing
*💔 Benci* : kecoa, autis, anak epep, tikus, kalian semua

*───────[ SOSIAL MEDIA ]───────*
*📷 Instagram* : chat aja cuy
*🇫  Facebook* : D'anang wijaya saputra
*🏮 Chanel Youtube* : chat saja ;V
*🐈 Github:* Github.com/Danangws
`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `BIODATA OWNER`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'BIODATA OWNER'\nitem1.TEL;waid=62831433937633:62831433937633\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = fs.readFileSync(`./ppown.jpg`)
  image = (await conn.prepareMessage('0@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "",
        "description": '\n\n' + ext,
        "retailerId": "",
        "url": '',
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6282125363557@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": false
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)

}
handler.help = ['biodataowner', 'infoowner']
handler.tags = ['info']
handler.command = /^(biodata(owner)?|infoowner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm