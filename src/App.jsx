
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Parent } from './components/Parent'
import Button from './components/Button'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Parent/>}/>
        <Route path='/Button' element={<Button/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
