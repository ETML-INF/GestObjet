import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import Salle from '#models/salle'
import { SalleValidator } from '#validators/salle'

export default class SallesController {
  /**
   * Display a list of resource
   */
  async getAll({ response }: HttpContext) {
    try {
      const salles: Salle[] = await Salle.all()
      return response.status(200).send(salles)
    } catch (err) {
      logger.error({ err: err }, 'Erreur de récuperation des salles')
      return response.status(500).send('Erreur serveur')
    }
  }

  async getById({ params, response }: HttpContext) {
    const id = decodeURIComponent(params.id)
    try {
      const salle = await Salle.findBy('id', id)
      if (!salle) {
        return response.status(404).send('salle pas trouvé')
      }
      return response.status(200).send(salle)
    } catch (err) {
      logger.error({ err: err }, `erreur lors de la récuperation de la salle dont l'id est ${id}`)
      return response
        .status(500)
        .send(`erreur lors de la récuperation de la salle dont l'id est ${id}`)
    }
  }
  /**
   * Display form to create a new record
   */
  async create({ request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(SalleValidator)

      await Salle.create({
        numero: payload.numero,
        batiment: payload.batiment,
      })
      return response.status(200).send('Salle créé avec succès !')
    } catch (err) {
      logger.error({ err: err }, 'erreur de création de salle')
      return response.status(500).send('erreur de création de salle')
    }
  }

  /**
   * Edit individual record
   */
  async modify({ params }: HttpContext) {}

  /**
   * Delete record
   */
  async delete({ params }: HttpContext) {}
}
