import { CardFinal } from "./components/CardFinal"
import { CardInicial } from "./components/cardinicial"
import { useState } from "react"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  return (
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited} />
    ) : (
      <CardFinal notaAvaliacao={notaAvaliacao} />
    )
  )
}

// 17:15
