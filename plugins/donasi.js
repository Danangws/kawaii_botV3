let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6285715590172
│┝‷✧ *Dana:* 6285715590172
│┝‷✧ *Linkaja:* 6285715590172
│┝‷✧ *Gopay:* 6285715590172
│┝‷✧ *Ovo:* 6285715590172
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285715500172?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
