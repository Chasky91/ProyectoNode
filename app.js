import http from 'node:http' //metodo que nos permitira la comunicacion entre el cliente y el servidor
import fs from 'node:fs'

const puertoDeseado = process.env.PORT ?? 1234  //puerto por el que corre la  apliacaion

const processRequest = (req, res) => {

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if(req.url === "/") {

        console.log(req.url)
        res.end('Holam Mundo')

    } else if(req.url === '/contacto'){

        res.end('<h2> Contacto </h2>')
        
    } else {
        res.statusCode = 404
        res.end('<h2> 404    </h2>')
    }
    
}

const server = http.createServer(processRequest)

server.listen(puertoDeseado, () => {
    console.log(`Server escuchado por el puerto http://localhost:${puertoDeseado}`)
})
