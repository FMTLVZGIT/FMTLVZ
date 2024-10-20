import {googleImage} from '@bochilteam/scraper';

const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `*🇩🇪 Uso Correcto: ${usedPrefix + command} 𝝨𝗫𝘾𔗁 𝘽㊮𝙏ㅤ⁝ㅤ𝗙𝗠𝗧𝗟𝗩𝗭 𝗙𝗠𝗧𝗟𝗩𝗭*`, m, rcanal);
await m.react(rwait)
conn.reply(m.chat, '🇩🇪 *Descargando su imagen...*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [['Imagen 1', dev, await res.getRandom(),
[[]], [[]], [[]], [[]]], ['Imagen 2', dev, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 3', dev, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 4', dev, await res.getRandom(), [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `🇩🇪 Resultado de ${text}`, '🔎 Imagen - Descargas', null, messages, m);
await m.react(done)
};
handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = ['image', 'imagen'];
handler.register = true;
export default handler;
