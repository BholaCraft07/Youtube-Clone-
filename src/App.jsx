import 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Layout/Routing/Routing'
import { AppProvider} from './Layout/ContextApi/ContextApi'
import './app.css'
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>

  )
}

export default App