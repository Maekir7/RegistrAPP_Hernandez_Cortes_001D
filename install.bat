git clone https://github.com/Maekir7/RegistrAPP_Hernandez_Cortes_001D
call npm i -g typescript @ionic/cli @ionic/storage-angular
call ionic start nombre blank --type angular
rd /s /q "nombre/src"
ren "RegistrAPP_Hernandez_Cortes_001D/src" "nombre/src"
rd /s /q "RegistrAPP_Hernandez_Cortes_001D"
cd "nombre/src"
call npm i @ionic/storage-angular angularx-qrcode
call ionic serve
pause