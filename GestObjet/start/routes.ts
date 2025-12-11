/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import SallesController from '#controllers/salles_controller'
import ObjetsController from '#controllers/objets_Controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router
      .group(() => {
        router.get('/', [SallesController, 'getAll'])
        router.get('/:id', [SallesController, 'getById'])
        router.get('/:id/objets', [SallesController, 'getObjets'])
        router.post('/', [SallesController, 'create'])
        router.put('/:id', [SallesController, 'modify'])
        router.delete('/:id', [SallesController, 'delete'])
      })
      .prefix('salle')
    router
      .group(() => {
        router.get('/', [ObjetsController, 'getAll'])
        router.get('/:id', [ObjetsController, 'getById'])
        router.post('/', [ObjetsController, 'create'])
        router.put('/:id', [ObjetsController, 'modify'])
        router.delete('/:id', [ObjetsController, 'delete'])
      })
      .prefix('objet')
  })
  .prefix('api')
