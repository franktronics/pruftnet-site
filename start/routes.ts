/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const WaitlistController = () => import('#controllers/waitlist_controller')

router.on('/').renderInertia('home/home')
router.on('/doc').renderInertia('doc/doc')
router.on('/about').renderInertia('about/about')

router.post('/waitlist', [WaitlistController, 'store'])
