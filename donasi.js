let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [6288293200090]
│ •  [6288293200090]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler