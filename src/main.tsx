import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '/src/fonts.css';
import { Button } from './components/ui/button';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='p-2 flex flex-col gap-2'>
      <hr />
      <h1>Botones</h1>
      <div className='flex gap-4 items-center'>
        <h1 className='font-semibold'>Primarios</h1>
        <Button>Primario</Button>
        <Button disabled>Primario Disabled</Button>
      </div>
      <div className='flex gap-4 items-center'>
        <h1 className='font-semibold'>Secundarios</h1>
        <Button variant="secondary">Secundario</Button>
        <Button variant="secondary" disabled>Secundario Disabled</Button>
      </div>
      <div className='flex gap-4 items-center'>
        <h1 className='font-semibold'>Third</h1>
        <Button variant="third">Third</Button>
        <Button variant="third" disabled>Third Disabled</Button>
      </div>
      <hr />
    </div>
  </StrictMode>,
)