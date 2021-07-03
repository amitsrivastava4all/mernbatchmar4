const env = {
    'dev':{
        'db': 'http://localhost:27017'
    },
    'production':{
        'db': 'http://aws.cloud:27017'
    }
}
module.exports = env;