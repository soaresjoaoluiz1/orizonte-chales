import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import './styles.css'
import RootLayout from './routes/__root'
import HomePage from './routes/index'
import ModelosIndex from './routes/modelos.index'
import ModelosEssencia from './routes/modelos.essencia'
import ModelosAFrame from './routes/modelos.a-frame'
import ComoFunciona from './routes/como-funciona'
import Materiais from './routes/materiais'
import Pagamento from './routes/pagamento'
import Contato from './routes/contato'
import Obrigado from './routes/obrigado'

const rootRoute = createRootRoute({ component: RootLayout })

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })
const modelosRoute = createRoute({ getParentRoute: () => rootRoute, path: '/modelos', component: ModelosIndex })
const essenciaRoute = createRoute({ getParentRoute: () => rootRoute, path: '/modelos/essencia', component: ModelosEssencia })
const aFrameRoute = createRoute({ getParentRoute: () => rootRoute, path: '/modelos/a-frame', component: ModelosAFrame })
const comoRoute = createRoute({ getParentRoute: () => rootRoute, path: '/como-funciona', component: ComoFunciona })
const matRoute = createRoute({ getParentRoute: () => rootRoute, path: '/materiais', component: Materiais })
const pagRoute = createRoute({ getParentRoute: () => rootRoute, path: '/pagamento', component: Pagamento })
const contatoRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contato', component: Contato })
const obrigadoRoute = createRoute({ getParentRoute: () => rootRoute, path: '/obrigado', component: Obrigado })

const routeTree = rootRoute.addChildren([
  indexRoute,
  modelosRoute,
  essenciaRoute,
  aFrameRoute,
  comoRoute,
  matRoute,
  pagRoute,
  contatoRoute,
  obrigadoRoute,
])

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
