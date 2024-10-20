let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🍭 *¡Este chat no está registrado!*', m, fake)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '🇩🇪 *𝝨𝗫𝘾𔗁 𝘽㊮𝙏ㅤ⁝ㅤ𝗙𝗠𝗧𝗟𝗩𝗭 no está baneada en este chat*', m, fake)
chat.isBanned = false
await conn.reply(m.chat, '🇩🇪 *𝝨𝗫𝘾𔗁 𝘽㊮𝙏ㅤ⁝ㅤ𝗙𝗠𝗧𝗟𝗩𝗭 ya fué desbaneada en este chat*', m, fake)
}
handler.help = ['unbanchat'];
handler.tags = ['grupo'];
handler.command = ['unbanchat','desbanearchat','desbanchat']
handler.admin = true 
handler.botAdmin = true
handler.group = true

export default handler
