const { MessageType, WAMessageProto, Presence, MessageOptions, WA_DEFAULT_EPHEMERAL, Mimetype, Browsers, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const {text, document, location, liveLocation, contact, contactsArray, buttonsMessage, listMessage, video, sticker, audio, product, extendedText, groupInviteMessage } = MessageType
const {color} = require('./lib/color')
const {getBuffer} = require('./lib/functions')
const {fetchJson} = require('./lib/fetcher')
const ffmpeg = require('fluent-ffmpeg')
const speed = require("performance-now")
const { exec } = require('child_process')
const hx = require('hxz-api')
const { y2mate } = require('./lib/y2mate');
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const request = require('request')
const axios = require('axios')
let { getRandom} = require('./lib/functions')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config.json'))
let ownerNumber = config.ownerNumber
let { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const getPP = async (jid) => {
	try {
					ppnya = await arul.getProfilePicture(jid)
				} catch {
					ppnya = 'https://ibb.co/sWKnrLJ'
				}
				return ppnya
}
const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const msga = (message) => {
                if (message.length >= 10){
                    return `${message.slice(0, 10)}`
                }else{
                    return `${message}`
                }
        }

/**DATABASE*/
var presen = false
var pren = 'composing'
var namabot = 'Arul-BOT'

module.exports = arul = async(arul, rul) => {
	try {
		if (!rul.hasNewMessage) return
        rul = rul.messages.all()[0]
		if (rul.key.id.startsWith('3EB0') && rul.key.id.length === 12) return
		if (presen) {
		arul.updatePresence(rul.key.remoteJid, pren)
		}
		const isGroup = rul.key.remoteJid.endsWith('g.us')
		const content = JSON.stringify(rul.message)
		const sender = rul.key.fromMe ? arul.user.jid : isGroup ? rul.participant : rul.key.remoteJid
		var from = rul.key.remoteJid
		const groupMetadata = isGroup ? await arul.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const type = Object.keys(rul.message)[0]
const pushname = (sender === arul.user.jid) ? arul.user.name : arul.contacts[sender].notify || arul.contacts[sender].vname || 'Tidak Terbaca'
		budy = (type === 'conversation') ? rul.message.conversation : (type === 'extendedTextMessage') ? rul.message.extendedTextMessage.text : ''
		prefix = /^[°zZ•π.'":÷×¶∆£¢€¥®™✓=;~ |!+<?#$%^&\/\\©^]/.test(budy) ? budy.match(/^[°zZ•π.'":÷×¶∆£¢€¥®™✓=;~ |!+<?#$%^&\/\\©^]/gi)[0] : '#'
		 button = (type == 'buttonsResponseMessage') ? rul.message.buttonsResponseMessage.selectedButtonId : ''
		 template = (type === "templateButtonReplyMessage") && rul.message.templateButtonReplyMessage.selectedId ? rul.message.templateButtonReplyMessage.selectedId : ''
body = (type === 'conversation' && rul.message.conversation.startsWith(prefix)) ? rul.message.conversation : (type == 'imageMessage') && rul.message[type].caption.startsWith(prefix) ? rul.message[type].caption : (type == 'videoMessage') && rul.message[type].caption.startsWith(prefix) ? rul.message[type].caption : (type == 'extendedTextMessage') && rul.message[type].text.startsWith(prefix) ? rul.message[type].text : (type === "templateButtonReplyMessage") && rul.message.templateButtonReplyMessage.selectedId ? rul.message.templateButtonReplyMessage.selectedId : (type == 'listResponseMessage') && rul.message[type].singleSelectReply.selectedRowId ? rul.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && rul.message[type].selectedButtonId ? rul.message.buttonsResponseMessage.selectedButtonId : ""
let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const isOwner = ownerNumber.includes(sender)
		const arg = body.slice(command.length+2)
		
		 const reply = async(teks) => {
			 arul.sendMessage(from, teks, text, {quoted: rul})
		 }
	
	mess = {
			wait: '[ WAIT ] Sedang di proses ...⏳',
			success: 'Berhasil!',
			error: {
				stick: 'Maaf, terjadi kesalahan saat convert gambar ke sticker',
				Iv: 'Linknya mati:v',
				api: 'Error'
			},
			only : {
				pc: 'Perintah ini hanya bisa digunakan di private chat saja!',
				Registered: `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix}daftar*\n\nNote:\nHarap save nomor ku agar bisa mendapatkan serial!!`,
				group: 'Grup only bruh...',
				ownerG: 'Owner grup only bruh...',
				ownerB: `*[ Khusus owner ${namabot} ]*`,
				creator: `*[ Khusus creator ${namabot} ]*`,
				admin: '*[ Khusus admin group ]*',
				premium: `Premium user only bruh...\nMau jadi user premium?\nChat wa.me/6289636006352`,
				Badmin: 'Jadikan bot admin terlebih dahulu!'
			}
		}
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
            
		if (isCmd) console.log(color('[ COMMAND ]', 'lime'), color(command, 'cyan'), color('from', 'yellow'), color(sender.split('@')[0], 'magenta'))
		if (!isCmd && !isGroup) console.log(color('[ PRIVATE ]', 'lime'), color(msga(budy), 'cyan'), color('from', 'yellow'), color(sender.split('@')[0], 'magenta'))
		if (!isCmd && isGroup) console.log(color('[ GROUP ]', 'lime'), color(msga(budy), 'cyan'), color('from', 'yellow'), color(sender.split('@')[0], 'magenta'), color('in', 'orange'), color(groupName, 'pink'))
		
		switch (command) {
		case 'menu':
		case 'help':
	menunye = `*Hallo Kak ${pushname}*
`
 ppimg = await getPP(sender)
gambar = await getBuffer(ppimg)
gbutsan = [
  {buttonId: '#instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
  {buttonId: '#owner', buttonText: {displayText: 'OWNER'}, type: 1}
]
mhan = await arul.prepareMessage(from, {name: namabot, jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
    contentText: menunye,
    footerText: '*👑 Owner Name : ArulGanz*\n*_🤖 Bot Name : ${namabot}_*\n*_👑 No Owner : +62 812-2985-9085_*\n*_📨 Email : syahrulrahmadan819@gmail.com_*\n*_🌐 Browser : Linux_*\n*_📊 Langauge : Javascript_*\n*_🐣My Birthday : 15-Oktober-2004_*\n\n*Hai Kak Ini Menu ArulBotz*\n\n*Convert Menu*\n*1. !sticker*\n\n*Info Botz*\n*2. !owner*\n\n*Fun Menu*\n*3. !artinama*\n*4. !quotes*\n*5. !quotesanime*\n*6. !quotesdilan*\n*7. !katabijak*\n\n\n©BotWhatsapp By ArulGanz',
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		arul.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: rul, contextInfo:{mentionedJid: [sender, '0@s.whatsapp.net']}})
	break
	case 'instagram':
	if (!arg) return reply('*Jangan Lupa Follow Instagram*\n*https://instagram.com/_daaa_1*')
break
case 'quotes':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=d9fe2f01f88422fc0ff8a32b`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'play':
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
resi = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
let thumbInfo = `â’ã€Œ  *Youtube Search*  ã€
â”œ *Judul :* ${resi.all[0].title}
â”œ *ID Video :* ${resi.all[0].videoId}
â”œ *Diupload Pada :* ${resi.all[0].ago}
â”œ *Views :* ${resi.all[0].views}
â”œ *Durasi :* ${resi.all[0].timestamp}
â”œ *Channel :* ${resi.all[0].author.name}
â”” *Link Channel :* ${resi.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(resi.all[0].image, image, {quoted: fkontak, caption: thumbInfo})
resi = await y2mateA(resi.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate *Coba Ulangi*_')
})
sendFileFromUrl(resi[0].link, audio, {quoted: fkontak, mimetype: 'audio/mp4', filename: resi[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
let thumbInfo = `â’ã€Œ  *${botname}*  ã€
â”œ *Judul :* ${res.all[0].title}
â”œ *ID Video :* ${res.all[0].videoId}
â”œ *Diupload Pada :* ${res.all[0].ago}
â”œ *Views :* ${res.all[0].views}
â”œ *Durasi :* ${res.all[0].timestamp}
â”œ *Channel :* ${res.all[0].author.name}
â”” *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: fkontak, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate*Coba Ulangi*_')
})
sendFileFromUrl(res[0].link, document, {quoted: msg, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'quotesanime':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=d9fe2f01f88422fc0ff8a32b`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(rul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await arul.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
fs.unlinkSync(ran)
})
case 'quotesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=d9fe2f01f88422fc0ff8a32b`)
reply(quotedilan.result)
break
case 'tiktokdl':
       	   case 'tiktok':
       	   case 'tt':
       	   case 'ttdl':
 		   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(error.lv)
 		   reply(mess.wait)
		    hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Lain Kali Jangan Gitu Yak Waterpak Men!!*`
		    arul.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:rul,caption:me})
		    })
	    	})
     		.catch(e => console.log(e))
     		break
case 'katabijak':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=d9fe2f01f88422fc0ff8a32b`)
reply(get_result.result)
break
	case 'artinama':
	if (!arg) return reply('Masukan namanya!')
	let nama = await fetchJson(`https://cililitan.herokuapp.com/api/artinama?nama=${encodeURIComponent(arg)}`)
	reply(nama.result)
break
case 'presence':
if (!isOwner) return reply(mess.only.owner)
	if (arg === 'on') {
		presen = true
		reply('*Presence telah aktif!*')
	} else if (arg === 'off') {
		presen = false
		reply('*Presence telah naktif!*')
	} else {
		reply('Pilih on atau off!')
	}
break
case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (
          ((isMedia && !rul.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(rul).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : rul;
          const media = await arul.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              arul.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: rul,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && rul.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              rul.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(rul).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : rul;
          const media = await arul.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              arul.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: rul,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
case 'owner':
const vcard = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:Owner ${namabot} \n` // GANTI NAMA LU
            + `ORG:Owner ${namabot};\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('6281229859085', '')}:+${ownerNumber.replace('6281229859085', '')}\n` // GANTI NOMOR LU
            + `END:VCARD`
			anub = await arul.sendMessage(from, {displayName: `Owner ${namabot}`, vcard: vcard}, contact, {quoted: rul})
			arul.sendMessage(from, 'Itu nomor ownerku', text, {quoted: anub})
			break
			if (!isOwner) return reply(mess.only.owner)
			case 'setrecording':
			pren = 'recording'
reply('*Presence telah diubah menjadi recording!*')
				}
	}catch (e) {
	console.log(String(e))
		}
		}
