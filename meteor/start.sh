# Script has two arguments
# The first one is a domain to deploy. 
# It requires $domain.json config file and $domain dir with meteor bundle
# The second argument is a TCP port for the app. It's optional
# If it is not defined node.js will assign a random one
#SHELL := /bin/bash
<<COMMENT1
killall node
echo stoping forever
rm -r ../bundle
echo removing previous bundle
rm -r ../leaderboard.tar.gz
echo removing previous targz
meteor bundle ../leaderboard.tar.gz
echo bundling
tar -xvzf ../leaderboard.tar.gz
echo extracting
mv ./bundle ../bundle
echo moving from a bit upper
rm ../leaderboard.tar.gz
echo removing targz
COMMENT1
oldpath=`pwd`
cd ../bundle/programs/server/node_modules
echo going to node_modules
rm -r fibers
echo remove fiber
npm install fibers@1.0.0
echo install fiber
#cd ..
#cd ..
#cd ..
#cd ..
#cd Tapmate
cd $oldpath
echo coming back
domain='meteor.nicolsondsouza.com'
#config=config/$domain.json
dbname=$(echo $domain | cut -f1 -d.)
#export METEOR_SETTINGS=`cat $config`
export MONGO_URL='mongodb://localhost/'$dbname
export ROOT_URL='http://'$domain

#if [ -n $2 ]
#then
  export PORT='80'
#fi

forever start ../bundle/main.js
echo guess things started
ENDSSH