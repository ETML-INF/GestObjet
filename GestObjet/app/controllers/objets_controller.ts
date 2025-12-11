import type { HttpContext } from '@adonisjs/core/http'

export default class ObjetsController {
  /**
   * Display a list of resource
   */
  async getAll({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
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
