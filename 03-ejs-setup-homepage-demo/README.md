Make note that we have two new directories now.

There's a src folder and a views folder with anindex.ejs file. 

1. We need to install the ejs package

We also need to add some middleware to our server. Luckily, express has a built in  way to handle this.

Here are the snippets that we need to add to our server:

2. server.use('views', './src/views');
3. server.use('view engine', 'ejs');

4. Call the render method inside of your home route and add the appropriate parameters.

5. Update the index.ejs file in your views folder using ejs syntax