echo $(pwd)


rm bundle.tar.gz

pm2 stop ../app/main.js

rm -Rf ../app
mkdir ../app



meteor bundle bundle.tar.gz

mv bundle.tar.gz ../app/bundle.tar.gz

#meteor bundle ../app/bundle.tar.gz
cd ..
cd app
tar -xvzf bundle.tar.gz
echo $(pwd)

cd bundle/programs/server/node_modules
rm -Rf fibers
npm install fibers@1.0.0
cd ..
cd ..
cd ..
echo $(pwd)
export MONGO_URL='mongodb://hashrepublic:123456@kahana.mongohq.com:10093/HashRepublic'
export ROOT_URL='http://128.199.196.222:3000'
export PORT=3000
export METEOR_SETTINGS=$(cat ../../HashRepublic/hashsettings.json)
export MAIL_URL='smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587'
pm2 start main.js