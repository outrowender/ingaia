import { app } from './app'

const port = process.env.PORT

app.listen(port, () => {
    console.info(`Server is running in port ${port}`)
})