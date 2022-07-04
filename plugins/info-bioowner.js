let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Rel_Bot
*✉️ Nama RL* : Farel
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 26 april 2007
*🎨 Umur* : 15
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton Hanime, Chatting, ngocok
*💬 Sifat* : Baik, asik, sopan, ramah, tukang kocok 
*🗺️ Tinggal* : Kabupaten buol 
*❤️ Suka* : kamu
*💔 Benci* : ---

*───────[ SOSIAL MEDIA ]───────*
*🇫  Facebook* : Farel Rel

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
