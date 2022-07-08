let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    try {
        let pp = await(await fetch(image)).buffer
        let gc1 = '628983755600-120363037529652885@g.us'
        let _gc1 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc1)
        let caption = `*ᗒ* Discord 1st
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://discord.gg/UFTXkxRrWT
┗━━━━━━━━━━━━━━━━━━━━━━━━ 

*ᗒ* Discord 2st
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://discord.gg/YzpFy77yB7
┗━━━━━━━━━━━━━━━━━━━━━━━━           

*ᗒ* Github
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://github.com/Uunkn0wnN
┗━━━━━━━━━━━━━━━━━━━━━━━━ 

*ᗒ* Weabsite
┏━━━━━━━━━━━━━━━━━━━━━━━━
  ┃https://shiroweb-dashboard.221447.repl.co
┗━━━━━━━━━━━━━━━━━━━━━━━━

*ᗒ* Youtube
┏━━━━━━━━━━━━━━━━━━━━━━━━
  ┃https://youtube.com/channel/UC_w0uOuASLUMS5l3XLoB6Wg
┗━━━━━━━━━━━━━━━━━━━━━━━━
                                                                                           
 *ᗒ* instagram

┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃https://instagram.com/22.1447
┗━━━━━━━━━━━━━━━━━━━━━━━━                                                                          
*ᗒ* Twitter

┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃https://twitter.com/22_1447
┗━━━━━━━━━━━━━━━━━━━━━━━━

*ᗒ* Replit 1st
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://replit.com/@221447
┗━━━━━━━━━━━━━━━━━━━━━━━━ 

*ᗒ* Replit 2st
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://replit.com/@private62726718
┗━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()
        await conn.reply(m.chat, caption, m, { contextInfo: {
            externalAdReply: {
              sourceUrl: 'https://shiroweb-dashboard.221447.repl.co/#/',
              title: 'support me',
              body: 'Uunkn0wnN',
              thumbnail: pp
            }
        }})
    } catch (e) {
        let res = await fetch('https://raw.githubusercontent.com/Uunkn0wnN/AuraBot-server/main/files/src.json')
        let json = await res.json()
        let tulisan = `*ᗒ* Discord 1st
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://discord.gg/UFTXkxRrWT
┗━━━━━━━━━━━━━━━━━━━━━━━━ 

*ᗒ* Discord 2st
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://discord.gg/YzpFy77yB7
┗━━━━━━━━━━━━━━━━━━━━━━━━           

*ᗒ* Github
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://github.com/Uunkn0wnN
┗━━━━━━━━━━━━━━━━━━━━━━━━ 

*ᗒ* Weabsite
┏━━━━━━━━━━━━━━━━━━━━━━━━
  ┃https://shiroweb-dashboard.221447.repl.co
┗━━━━━━━━━━━━━━━━━━━━━━━━

*ᗒ* Youtube
┏━━━━━━━━━━━━━━━━━━━━━━━━
  ┃https://youtube.com/channel/UC_w0uOuASLUMS5l3XLoB6Wg
┗━━━━━━━━━━━━━━━━━━━━━━━━
                                                                                           
 *ᗒ* instagram

┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃https://instagram.com/22.1447
┗━━━━━━━━━━━━━━━━━━━━━━━━                                                                          
*ᗒ* Twitter

┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃https://twitter.com/22_1447
┗━━━━━━━━━━━━━━━━━━━━━━━━

*ᗒ* Replit 1st
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://replit.com/@221447
┗━━━━━━━━━━━━━━━━━━━━━━━━ 

*ᗒ* Replit 2st
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃https://replit.com/@private62726718
┗━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()
    await conn.reply(m.chat, tulisan, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'https://shiroweb-dashboard.221447.repl.co/#/',
            title: 'support me',
            body: 'Uunkn0wnN',
            thumbnail: pp
        }
    }})
    }
}
handler.help = ['support']
handler.tags = ['main']
handler.command = /^support|gr(u|ou)(p|b)official|gcofficial$/i
module.exports = handler
