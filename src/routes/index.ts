import axios from 'axios'
import express, { Router, Request, Response } from 'express'

import packageJson from '../../package.json'

export const routes = Router()

routes.get('/', (_, res) => {
  const { name, version, description, author } = packageJson

  res.status(200).json({ name, version, description, author })
})

routes.get('/consultar-cep/:cep', async (req: Request, res: Response) => {
  const { cep } = req.params

  try {
    const response = await axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)

    res.status(200).json(response.data)
  } catch (error) {
    console.error('Erro ao fazer requisição:', error)
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})
