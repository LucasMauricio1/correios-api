import express, { json } from 'express'

import { routes } from './routes'

const app = express()

const port = process.env.PORT || 3333

app.use(json())
app.use(routes)

// app.listen(port, () => console.log(`🚀 App is running at port ${port}!`))

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
})
