const app = require('express')()

const http = require('http').createServer(app)

const io = require('socket.io')(http)

io.on('connection', (socket)=>{
    console.log('user connected')
    socket.emit('welcome','Welcome to the server')
    setTimeout(()=>{socket.emit('color','black')}, 2000)

    socket.on('color',(color)=>{
        io.emit('color',color)
    })

})


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

http.listen(3000, ()=>{
    console.log('Listening on 3000')
})