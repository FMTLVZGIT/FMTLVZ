let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🌹 *EQUIPO DE AYUDANTES*
🇩🇪 *Bot:* ${botname}
🇩🇪 *Versión:* ${vs}
🪴 *Libreria:* ${libreria + baileys}

👑 *Propietario:*

• @fmtlvz_
🇩🇪 *Rol:* Propietario
🌴 *Número:* ${creador}
🇩🇪 *GitHub:* https://github.com/@fmtlvz_`
await conn.sendFile(m.chat, icons, 'akari.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🇩🇪 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
await m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
