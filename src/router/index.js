const fs = require('fs')

const useRouter = (app) => {
    
    try {
        const files = fs.readdirSync(__dirname)
        for(file of files){
            if(file === 'index.js') return
            const router = require(`./${file}`)
            app.use(router.routes())
            app.use(router.allowedMethods())
        }
      } catch (err) {
        console.error(err);
      } 
}

module.exports = useRouter