fx_version 'cerulean'
game 'gta5'
lua54 'yes'

ui_page "web/dist/index.html"

client_scripts {
	"client/*.lua"
}

server_scripts {
	"server/*.lua"
}

files {
	'web/dist/index.html',
	'web/dist/**/*',
}