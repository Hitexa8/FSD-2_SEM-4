// 3.Write a NodeJS code to calculate and display the profit or loss incurred by an investor   
// who purchased 100 shares of a company's stock at Rs.50 per share and later sold them at Rs.60 per share. 
// The script should utilize the HTTP module to create an HTTP server that serves the profit or loss details. If there is a profit, 
// the message should be displayed in green color, and if there is a loss, it should be displayed in red color on server.

http = require('http')
selling_price = 60
cost_price = 50
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(selling_price>cost_price){
       res.write("<h5 style='color:'Green'>Profit</h5>")
    }
    else{
        res.write("<h5 style='color:'Red'>Loss</h5>")
    }  
    res.end();
}).listen(8086);
