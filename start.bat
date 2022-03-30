@echo off
echo pokrecem sa live-server
live-server . && (
	echo radi
) || (
	echo nema live-server, koristim node
	node index.js && (
		echo radi
	) || (
		echo a najjace sad
		index.html
	)
)
pause