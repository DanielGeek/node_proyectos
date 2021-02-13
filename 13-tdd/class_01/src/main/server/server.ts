import app from '../config/app'

app.listen(process.env.PORT, () => {
  console.log(`Server is working in Port: \x1b[32m${process.env.PORT}\x1b[0m`)
})
