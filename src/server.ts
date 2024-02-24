import express, { json } from 'express'

import { routes } from './routes'

const app = express()

const port = process.env.PORT || 3333

app.use(json())
app.use(routes)

app.listen(port, () => console.log(`🚀 App is running at port ${port}!`))
