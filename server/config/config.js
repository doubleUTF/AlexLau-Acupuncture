var env=process.env.NODE_ENV || 'development';

if (env === 'development'|| env==='test'){
  var config=require('./config.json')
  var envConfig=config[env];

  Object.keys(envConfig).forEach((key)=>{
    process.env[key]=envConfig[key];
  })
}

// Production environment variables must be manually inputted into cloud(Heroku)
