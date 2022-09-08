let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [6288804372906]
│ •  [6288804372906]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler