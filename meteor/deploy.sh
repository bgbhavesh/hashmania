echo $(pwd)

git pull -u origin master

rm bundle.tar.gz

rm -r ../appold
mkdir ../appold
meteor bundle bundle.tar.gz
mv bundle.tar.gz ../appold/bundle.tar.gz




#meteor bundle bundle.tar.gz

#mv bundle.tar.gz ../app/bundle.tar.gz

#meteor bundle ../app/bundle.tar.gz
cd ..
cd appold
tar -xvzf bundle.tar.gz
echo $(pwd)

cd bundle/programs/server/node_modules
rm -Rf fibers
npm install fibers@1.0.0
cd ..
cd ..
cd ..

cd ..
cd ..

echo $(pwd)
pm2 stop ../app/main.js
pm2 kill
rm -Rf app/
mv appold/ app
cd app/bundle/

export MONGO_URL='mongodb://hashrepublic:123456@kahana.mongohq.com:10093/HashRepublic'
export ROOT_URL='http://128.199.196.222:3000'
export PORT=3000
export METEOR_SETTINGS=$(cat /root/HashRepublic/HashRepublic/hashsettings.json)
export MAIL_URL='smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587'
pm2 flush
pm2 start main.js

cd ..
cd ..
cd HashRepublic

