# Script has two arguments
# The first one is a domain to deploy. 
# It requires $domain.json config file and $domain dir with meteor bundle
# The second argument is a TCP port for the app. It's optional
# If it is not defined node.js will assign a random one
cd $home
ls
echo "inside shell"
exit

domain='meteor.nicolsondsouza.com'
#config=config/$domain.json
dbname=$(echo $domain | cut -f1 -d.)
#export METEOR_SETTINGS=`cat $config`
export MONGO_URL='mongodb://localhost:27017/'$dbname
export ROOT_URL='http://'$domain

#if [ -n $2 ]
#then
  export PORT='80'
#fi

setsid meteor --production --port 80