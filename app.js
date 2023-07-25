const express = require('express')
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

// Set view engine to handlebars
app.engine('hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(express.static('public'));

class Product{
    constructor(n,d,p) {
        this.name = n;
        this.description = d;
        this.price = p;
    }
}
const mockProducts = [
    new Product("Shirt", "This is a description it is a shirt", 200),
    new Product("Pants", "This is a pants it is a description", 150),
    new Product("Socks", "This is a socks it is a description of a socks", 250)
];

// Product List
// [{name, description, price}]
app.get('/', (req,res)=>{
    res.render('productList', {layout: 'index', products: mockProducts});
})

// Product Details
// [{name, description, price}]
app.get('/product', (req,res)=>{
    res.render('productDetails', {layout: 'index', product: mockProducts[0]});
})

// Listen on port
app.listen(port, () => console.log(`App listening on ${port}`));