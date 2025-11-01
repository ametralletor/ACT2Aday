import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonio from './Testimonio.jsx'
import Typography from '@mui/material/Typography';
import barry from './assets/barry.jpg'
import maria from './assets/maria.jpg'
import johnpo from './assets/johnpo.jpg'
import lian from './assets/lian.jpg'

function App() {
  const [count, setCount] = useState(0)

  const testimonios =[
    {id: 0, nombre: "Barry Alderson Cifuente", pais: "EE.UU.", trabajo: "Ingeniero", empresa:"Nasa", testimonio:"Ehhh... uhhh- ugh.... fentanilo... ahhh... dame más fentanilo... ugh... no puedo sentir mis piernas... ugh... ahhh... fentanilo... i need more fentanyl... ugh... i can't breathe... ahhh... fentanyl... ayuda... ugh... ahhh...", imagen: barry},
    {id: 1, nombre: "María López", pais: "España", trabajo: "Desarrolladora", empresa:"Tech Solutions", testimonio:"React me ha arruinado la vida... he asesinado a mi jefe y me he metido en las drogas odio react. Todos los días tengo pesadillas con React y mui ", imagen: maria},
    {id: 2, nombre: "Johnpo John", pais: "Canada", trabajo: "Ingeniero", empresa:"Gogole", testimonio:"React me ha ayudado a conseguir un buen puesto de trabajo y a apreciar lo bonita que es la vida. Me encanta mi trabajo y no puedo parar de trabajar, es casi adictivo. En mis descansos pienso en trabajar y al dormir sueño con mi trabajo y quiero volver a trabajar y trabajar más y más. No quiero ver a mi familia porque me encanta mi trabajo", imagen: johnpo},
    {id: 3, nombre: "Lian-Xuanzang Lu", pais: "China", trabajo: "Budista", empresa:" montes etíopes", testimonio:"La vida… el significado de la vida, ¿qué es realmente? A veces creo que no se trata de encontrar una respuesta clara, sino de... simplemente vivirla. El budismo me enseña que todo es transitorio, que cada momento... pasa. El sufrimiento, la alegría, todo se disuelve, pero también todo está conectado, como una corriente que fluye sin descanso. No es cuestión de buscar algo fijo, algo que puedas tocar o poseer. Quizás el verdadero significado está en... ser consciente, en estar presente en cada instante. La mente, siempre en su vaivén, nos aleja de eso. Pero, si aprendes a mirar… solo un poco más allá de las apariencias, puedes sentir que hay algo más, algo que te une con todo. No hay respuestas fijas… solo una profunda quietud que se va desvelando con el tiempo. Y quizás eso, en su misteriosa simplicidad, es todo lo que necesitamos saber.", imagen : lian}
  ]

  return (
    <>
      <Typography variant="h2" align="center" gutterBottom>Testimonios de los usuarios</Typography>
      {testimonios.map((testimonio) => (
        <Testimonio 
          key={testimonio.id}
          nombre={testimonio.nombre}
          pais={testimonio.pais}
          trabajo={testimonio.trabajo}
          empresa={testimonio.empresa}
          testimonio={testimonio.testimonio}
          imagen={testimonio.imagen}
        />
      ))}
    </>
  )
}

export default App
