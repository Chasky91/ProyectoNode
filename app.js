import http from 'node:http'
import fs from 'node:fs'

const puertoDeseado = process.env.PORT ?? 1234

const processRequest = (req, res) => {

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if(req.url === "/") {

        console.log(req.url)
        res.end('Holam Mundo')

    } else if(req.url === '/contacto'){

        res.end('<h2> Contacto </h2>')
        
    } else if(req.url === '/imagen') {
        fs.readFile('./Clase01/img/sincrono.png', (err,data) => {
            if(err) {
                res.statusCode = 500
                res.end('<h2> Error interno en el servidor </h2>')
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })

    } else {
        res.statusCode = 404
        res.end('<h2> 404    </h2>')
    }
    
}

const server = http.createServer(processRequest)

server.listen(puertoDeseado, () => {
    console.log(`Server escuchado por el puerto http://localhost:${puertoDeseado}`)
})
