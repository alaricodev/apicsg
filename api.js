
 const express =  require('express');
 
const app = express();
 
app.get('/', (requision, response) => {
 
    response.status(200).json({teste:"hello world !!!"});
});
 
app.listen(3344, () => {
    dataAtual = Date.now();
    console.log('Servidor online em: ' + dataAtual)
 
});
