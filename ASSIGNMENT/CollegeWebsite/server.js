import http from "http";

const server = http.createServer((req, res) => {
    let path = req.url;

    if (path === "/" || path === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>College Website</title>
            </head>
            <body>
                <h1>Welcome to My College</h1>
                <p>This is the home page of my college website.</p>

                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About</a>
                </nav>
            </body>
            </html>
        `);
    }

    else if (path === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About College</title>
            </head>
            <body>
                <h1>About Computer Science Department</h1>
                <p>Welcome to the Computer Science Department.</p>

                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About</a>
                </nav>
            </body>
            </html>
        `);
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404 - Page Not Found</title>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
                <p>The requested page does not exist.</p>

                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About</a>
                </nav>
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});