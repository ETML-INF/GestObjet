import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import Salle from '#models/salle'

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
  async create({}: HttpContext) {}

  /**
   * Edit individual record
   */
  async modify({ params }: HttpContext) {}

  /**
   * Delete record
   */
  async delete({ params }: HttpContext) {}
}
