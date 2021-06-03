import app from './config/app'
const httpPort = process.env.PORT || 5000

app.listen(httpPort, () => {
  console.info(`Server running at http://localhost:${httpPort}`)
})
