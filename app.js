const express = require ("express");
const { get } = require("http");

const app = express ()
const path = require ('path')
const port = 3000;

app.get('/fibonacci',(req, res) => {
    numero = parseInt(req.query.numero);
    if(numero % 2 === 0) {
        fibonacci(20);
    }else
    {    
        fibonacci(10);
    }
    res.json(`la secuencia es : ${fibonacci}`);
})

function fibonacci(num) {  
        fibonacci = [];
        x= 0;
        y= 1;
        resultado = x+y;
    
        for (let i=0; i< num ;i++){
        resultado = x + y;
        x = y;
        y = resultado;

    fibonacci.push(resultado);
}
return fibonacci
}

app.listen(port, ()=> {
    console.log(`Escucha de el puerto 3000 ${port}!`)
}
)

