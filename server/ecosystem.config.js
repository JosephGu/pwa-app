module.exports = {
    apps:[
        {
            name:'pwa-app',
            script:'./bin/www',
            env:{
                NODE_ENV:'production',
                RUN_ENV:'production'
            },
            env_production:{
                NODE_ENV:'production',
                RUN_ENV:'production'
            },
            env_development:{
                NODE_ENV:'development',
                RUN_ENV:'development'
            },
            watch:['server'],
            ignore_watch:['node_modules'],
            cwd:'./'
        },
        
    ]

}