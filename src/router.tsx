import { Route, Routes } from 'react-router-dom'
import App from './App'
import { Project01 } from './pages/project-01'
import { Project02 } from './pages/project-02'
import { Project03 } from './pages/project-03'
import { Project04 } from './pages/project-04'

export function Router() {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path='/projeto-01' element={<Project01 />} />
      <Route path='/projeto-02' element={<Project02 />} />
      <Route path='/projeto-03' element={<Project03 />} />
      <Route path='/projeto-04' element={<Project04 />} />
    </Routes>
  )
}