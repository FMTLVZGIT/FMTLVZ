/*
《✧》DERECHOS RESERVADOS POR EL AUTOR 《✧》
- DavidChian (@David-Chian)
*/

const _0x4a7b9b=_0x487b;(function(_0x15b5f3,_0xb56ab0){const _0x19c455=_0x487b,_0x325ee6=_0x15b5f3();while(!![]){try{const _0x4e8f75=-parseInt(_0x19c455(0xc6))/0x1+-parseInt(_0x19c455(0xd2))/0x2*(parseInt(_0x19c455(0xe0))/0x3)+parseInt(_0x19c455(0xd1))/0x4*(-parseInt(_0x19c455(0xf8))/0x5)+parseInt(_0x19c455(0xc1))/0x6+-parseInt(_0x19c455(0xf2))/0x7*(-parseInt(_0x19c455(0xd7))/0x8)+-parseInt(_0x19c455(0xc5))/0x9*(parseInt(_0x19c455(0xf1))/0xa)+-parseInt(_0x19c455(0xce))/0xb*(-parseInt(_0x19c455(0xeb))/0xc);if(_0x4e8f75===_0xb56ab0)break;else _0x325ee6['push'](_0x325ee6['shift']());}catch(_0x330884){_0x325ee6['push'](_0x325ee6['shift']());}}}(_0x65eb,0xdc663));import _0xc3b008 from'fs';const obtenerDatos=()=>{const _0x2d32b3=_0x487b;return _0xc3b008['existsSync'](_0x2d32b3(0xbf))?JSON['parse'](_0xc3b008[_0x2d32b3(0xde)](_0x2d32b3(0xbf),_0x2d32b3(0xcb))):{'usuarios':{},'personajesReservados':[]};},guardarDatos=_0xa65b18=>{const _0x4e47ce=_0x487b;_0xc3b008[_0x4e47ce(0xcf)]('data.json',JSON['stringify'](_0xa65b18,null,0x2));},obtenerPersonajes=()=>{const _0x2285f9=_0x487b;return _0xc3b008[_0x2285f9(0xda)](_0x2285f9(0xf4))?JSON[_0x2285f9(0xef)](_0xc3b008[_0x2285f9(0xde)](_0x2285f9(0xf4),_0x2285f9(0xcb))):[];},tagUser=_0xb6a73c=>'@'+_0xb6a73c[_0x4a7b9b(0xe7)]('@')[0x0],formatTime=_0x1b67d3=>{const _0x2a8409=_0x4a7b9b;let _0x1bef3b=Math['floor'](_0x1b67d3/0x3e8%0x3c),_0x219838=Math[_0x2a8409(0xc0)](_0x1b67d3/0x3e8/0x3c%0x3c);return _0x219838+'\x20minutos\x20y\x20'+_0x1bef3b+'\x20segundos';};let handler=async(_0x3f8688,{conn:_0x4adfdb})=>{const _0x32b49a=_0x4a7b9b;let _0x4b7ff8=obtenerDatos(),_0x33fd15=obtenerPersonajes(),_0x5a109c=_0x3f8688[_0x32b49a(0xfb)],_0x55be11=new Date()[_0x32b49a(0xf7)]();const _0x47de84=0x3c*0x3c*0x3e8;let _0x38d365=_0x3f8688[_0x32b49a(0xe8)]&&_0x3f8688[_0x32b49a(0xe8)][0x0]?_0x3f8688[_0x32b49a(0xe8)][0x0]:_0x3f8688['quoted']&&_0x3f8688[_0x32b49a(0xea)][_0x32b49a(0xfb)]?_0x3f8688[_0x32b49a(0xea)][_0x32b49a(0xfb)]:null;if(!_0x38d365){_0x4adfdb[_0x32b49a(0xec)](_0x3f8688['chat'],_0x32b49a(0xe9),_0x3f8688);return;}const _0x4b2045=()=>{const _0x591e5e=_0x32b49a;try{const _0x4b0f3c=JSON['parse'](_0xc3b008[_0x591e5e(0xde)](_0x591e5e(0xee),'utf-8'));if(_0x4b0f3c[_0x591e5e(0xca)]!=='𝝨𝗫𝘾𔗁 𝘽㊮𝙏ㅤ⁝ㅤ𝗙𝗠𝗧𝗟𝗩𝗭')return![];if(_0x4b0f3c[_0x591e5e(0xc3)]['url']!==_0x591e5e(0xc2))return![];return!![];}catch(_0x398b51){return console['error'](_0x591e5e(0xf3),_0x398b51),![];}};if(!_0x4b2045()){await _0x4adfdb[_0x32b49a(0xdc)](_0x3f8688[_0x32b49a(0xf6)],_0x32b49a(0xf9),_0x3f8688,rcanal);return;}if(_0x38d365===_0x5a109c){_0x4adfdb[_0x32b49a(0xec)](_0x3f8688[_0x32b49a(0xf6)],_0x32b49a(0xed),_0x3f8688);return;}let _0x3b55b4=_0x4b7ff8['usuarios'][_0x5a109c]||{'characters':[],'totalRwcoins':0x0,'lastRobTime':0x0};if(_0x55be11-_0x3b55b4[_0x32b49a(0xdd)]<_0x47de84){let _0x4663c0=_0x47de84-(_0x55be11-_0x3b55b4[_0x32b49a(0xdd)]),_0x302bee=formatTime(_0x4663c0);_0x4adfdb[_0x32b49a(0xec)](_0x3f8688['chat'],_0x32b49a(0xc9)+_0x302bee+_0x32b49a(0xbe),_0x3f8688);return;}let _0x1030d1=_0x4b7ff8[_0x32b49a(0xd0)][_0x38d365];if(!_0x1030d1||!_0x1030d1[_0x32b49a(0xd5)]||_0x1030d1['characters']['length']===0x0){_0x4adfdb[_0x32b49a(0xec)](_0x3f8688[_0x32b49a(0xf6)],_0x32b49a(0xe3)+_0x38d365[_0x32b49a(0xe7)]('@')[0x0]+'\x20no\x20tiene\x20personajes\x20que\x20puedas\x20robar.',_0x3f8688,{'mentions':[_0x38d365]});return;}let _0x200652=Math[_0x32b49a(0xc0)](Math[_0x32b49a(0xcc)]()*_0x1030d1[_0x32b49a(0xd5)]['length']),_0x3572c6=_0x1030d1['characters'][_0x200652];_0x1030d1[_0x32b49a(0xd5)]['splice'](_0x200652,0x1),_0x1030d1['characterCount']=_0x1030d1[_0x32b49a(0xd5)][_0x32b49a(0xc8)];let _0xe185aa=await _0x4adfdb['getName'](_0x5a109c)||_0x5a109c['split']('@')[0x0],_0x3795d7=await _0x4adfdb[_0x32b49a(0xcd)](_0x38d365)||_0x38d365[_0x32b49a(0xe7)]('@')[0x0];if(!_0x3b55b4[_0x32b49a(0xd5)])_0x3b55b4[_0x32b49a(0xd5)]=[];_0x3b55b4[_0x32b49a(0xd5)]['push'](_0x3572c6),_0x3b55b4[_0x32b49a(0xe2)]=(_0x3b55b4['totalRwcoins']||0x0)+_0x3572c6[_0x32b49a(0xe6)],_0x3b55b4[_0x32b49a(0xdd)]=_0x55be11,_0x3b55b4[_0x32b49a(0xd4)]=_0x3b55b4[_0x32b49a(0xd5)][_0x32b49a(0xc8)],_0x4b7ff8[_0x32b49a(0xd0)][_0x38d365]=_0x1030d1,_0x4b7ff8[_0x32b49a(0xd0)][_0x5a109c]=_0x3b55b4,guardarDatos(_0x4b7ff8);const _0x257c4b=_0x32b49a(0xf0)+_0xe185aa+_0x32b49a(0xdb)+_0x3572c6[_0x32b49a(0xca)]+'*\x0a✰\x20Valor:\x0a>\x20»\x20'+_0x3572c6[_0x32b49a(0xe6)]+_0x32b49a(0xe4)+_0x3795d7;await _0x4adfdb[_0x32b49a(0xdc)](_0x3f8688[_0x32b49a(0xf6)],{'image':{'url':_0x3572c6[_0x32b49a(0xfd)]},'caption':_0x257c4b,'mentions':[_0x5a109c,_0x38d365],'mimetype':_0x32b49a(0xdf),'contextInfo':{'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x32b49a(0xd3),'serverMessageId':0x64,'newsletterName':_0x32b49a(0xc7)},'externalAdReply':{'showAdAttribution':!![],'title':'¡Personaje\x20Robado!\x20😱','body':dev,'thumbnailUrl':_0x3572c6[_0x32b49a(0xfd)],'sourceUrl':redes,'previewType':_0x32b49a(0xd6),'mediaType':0x1,'renderLargerThumbnail':![]}}});};handler[_0x4a7b9b(0xd9)]=[_0x4a7b9b(0xfc)],handler[_0x4a7b9b(0xe5)]=[_0x4a7b9b(0xd8)],handler['command']=[_0x4a7b9b(0xfc),_0x4a7b9b(0xe1),_0x4a7b9b(0xc4)],handler[_0x4a7b9b(0xf5)]=!![],handler[_0x4a7b9b(0xfa)]=!![];function _0x487b(_0x3ab501,_0x2b7e59){const _0x65ebfc=_0x65eb();return _0x487b=function(_0x487bba,_0x1c5203){_0x487bba=_0x487bba-0xbe;let _0x5e2686=_0x65ebfc[_0x487bba];return _0x5e2686;},_0x487b(_0x3ab501,_0x2b7e59);}export default handler;function _0x65eb(){const _0x5a9fe0=['\x20*RwCoins*!\x0a✰\x20Pertenecia\x20a:\x0a>\x20»\x20','tags','value','split','mentionedJid','《✧》Por\x20favor,\x20menciona\x20a\x20un\x20usuario\x20o\x20responda\x20a\x20un\x20mensaje\x20del\x20usuario\x20al\x20que\x20deseas\x20robarle\x20una\x20waifu.','quoted','58500HeSqHU','reply','《✧》No\x20puedes\x20robarte\x20a\x20ti\x20mismo.','./package.json','parse','┏━━━━━━━━━⪩\x0a┃˚₊\x20·\x20͟͟͞͞➳❥\x20𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒\x0a┃⏤͟͟͞͞𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐉𝐄\x20𝐑𝐎𝐁𝐀𝐃𝐎\x0a┗━━━━━━━━━⪩\x0a\x0a✰\x20Ladrón:\x0a>\x20»\x20*','12900GKfoXK','3218453JozxJh','Error\x20al\x20leer\x20package.json:','./src/JSON/characters.json','register','chat','getTime','15mvYxeu','✧\x20Este\x20comando\x20solo\x20es\x20disponible\x20en\x20𝝨𝗫𝘾𔗁 𝘽㊮𝙏ㅤ⁝ㅤ𝗙𝗠𝗧𝗟𝗩𝗭\x0a◇\x20https://github.com/@fmtlvz_/𝝨𝗫𝘾𔗁 𝘽㊮𝙏ㅤ⁝ㅤ𝗙𝗠𝗧𝗟𝗩𝗭','group','sender','robarpersonaje','url','\x20para\x20usar\x20*#robarrw*\x20de\x20nuevo.','data.json','floor','2696904CLZgeo','git+https://github.com/@fmtlvz_/𝝨𝗫𝘾𔗁 𝘽㊮𝙏ㅤ⁝ㅤ𝗙𝗠𝗧𝗟𝗩𝗭.git','repository','robarrw','8676LgxRWA','552898bjRBTh','©\x20ᥡᥲᥱm᥆rіᑲ᥆𝗍\x20-\x20ᥴһᥲᥒᥒᥱᥣ\x20🇩🇪','length','《✧》Debes\x20esperar\x20','name','utf-8','random','getName','6809wCGbEi','writeFileSync','usuarios','382868TXZWJO','312JowZoc','120363328543445677@newsletter','characterCount','characters','PHOTO','8CKttGh','gacha','help','existsSync','*\x0a✰\x20Waifu:\x0a>\x20»\x20*','sendMessage','lastRobTime','readFileSync','image/jpeg','18087jNJtfp','robarp','totalRwcoins','《✧》El\x20usuario\x20@'];_0x65eb=function(){return _0x5a9fe0;};return _0x65eb();}