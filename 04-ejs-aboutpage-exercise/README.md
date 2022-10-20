Make note that we have two new directories now.

There's a src folder and a views folder with a blank index.ejs file. 

1. We need to install the ejs package

We also need to add some middleware to our server. Luckily, express has a built in  way to handle this.

Here are the snippets that we need to add to our server:

server.use('views', './src/views');
server.use('view engine', 'ejs');