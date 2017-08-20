import express from 'express'
import next from 'next'
import cookieParser from 'cookie-parser'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	server.use(cookieParser())

	server.get('/', (req, res) => {
		if (!req.cookies.session) return res.redirect('/login')
		app.render(req, res, '/', req.query)
	})

	server.get('/login', (req, res) => {
		if (req.cookies.session) return res.redirect('/')
		app.render(req, res, '/login', req.query)
	})

	server.get('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
