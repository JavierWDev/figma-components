import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '/src/fonts.css';
import { Filter } from '@iconsans/react/linear';

// Boton
import { Button } from './components/ui/button';

// Tooltip
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MyTooltipContent } from './components/my_components/MyTooltipContent';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='p-2 flex flex-col gap-2'>
      <hr />
      <h1>Botones</h1>
      <div className='flex gap-4 items-center'>
        <h1 className='font-semibold'>Primarios</h1>
        <Button>
          Primario
          <Filter className='h-5 w-5 md:h-7 md:w-7' />
        </Button>
        <Button disabled>
          Primario Disabled
          <Filter className='h-5 w-5 md:h-7 md:w-7' />
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <h1 className='font-semibold'>Secundarios</h1>
        <Button variant="secondary">
          Secundario
          <Filter className='h-5 w-5 md:h-7 md:w-7' />
        </Button>
        <Button variant="secondary" disabled>
          Secundario Disabled
          <Filter className='h-5 w-5 md:h-7 md:w-7' />
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <h1 className='font-semibold'>Third</h1>
        <Button variant="third">
          Third
          <Filter className='h-5 w-5 md:h-7 md:w-7' />
        </Button>
        <Button variant="third" disabled>
          Third Disabled
          <Filter className='h-5 w-5 md:h-7 md:w-7' />
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <h1 className='font-semibold'>Botones con Tooltip</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <Button variant="default" size="icon">
              <Filter className='h-5 w-5 md:h-7 md:w-7' />
            </Button>
            </TooltipTrigger>
            <TooltipContent variant="default" side="top">
              <p>Normal</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <Button variant="secondary" size="icon">
              <Filter className='h-5 w-5 md:h-7 md:w-7' />
            </Button>
            </TooltipTrigger>
            <TooltipContent variant="success" side="bottom">
              <p>Success</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <Button variant="secondary" size="icon">
              <Filter className='h-5 w-5 md:h-7 md:w-7' />
            </Button>
            </TooltipTrigger>
            <TooltipContent variant="warning" side="left">
              <p>Warning</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <Button variant="third" size="icon">
              <Filter className='h-5 w-5 md:h-7 md:w-7' />
            </Button>
            </TooltipTrigger>
            <TooltipContent variant="error" side="right">
              <p>Error</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <Button variant="third" size="icon">
              <Filter className='h-5 w-5 md:h-7 md:w-7' />
            </Button>
            </TooltipTrigger>
            <TooltipContent variant="success" side="top">
              <MyTooltipContent title='Hola' description='Lorem ipsum dolor sit amet, consectetur' />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

      </div>
      <hr />
    </div>
  </StrictMode>,
)