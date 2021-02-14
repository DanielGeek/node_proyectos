import { Router } from 'express'

export default (router: Router): void => {
  router.post('/register-vehicle', (req, res) => {
    console.log(req.body)
  })
}
