import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
//importando a rota
import mainRoutes from './routes/index'

dotenv.config()

//configurando o servidor
const server = express()
//configurando o mustache
server.set('view engine','mustache')
//diretório que colocaremos nossos arquivos mustache
server.set('views',path.join(__dirname,'views'))
//template engines do mustache
server.engine('mustache',mustache())
//acessando a pasta public
server.use(express.static(path.join(__dirname,'../public')))
//importando as rotas do index.ts
server.use(mainRoutes)
//criando a página não encontrada
server.use((req,res)=>{
    res.render('pages/404')
})

//habilitando o servidor
server.listen(process.env.PORT)