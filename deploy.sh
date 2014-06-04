echo $(pwd)


pm2 stop ../app/main.js

rm -Rf ../app
mkdir ../app

rm bundle.tar.gz

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
export MONGO_URL='mongodb://localhost'
export ROOT_URL='http://128.199.196.222:3000'
export PORT=3000
pm2 start main.js