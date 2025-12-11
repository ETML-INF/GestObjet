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

  async getById({ request }: HttpContext) {}
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
