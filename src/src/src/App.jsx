import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [status, setStatus] = useState('Проверяем связь с базой данных...')

  useEffect(() => {
    async function checkConnection() {
      const { data, error } = await supabase.from('profiles').select('*').limit(1)
      if (error) {
        setStatus('Ошибка подключения: ' + error.message)
      } else {
        setStatus('Успех! Сайт подключен к базе данных Supabase!')
      }
    }
    checkConnection()
  }, [])

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Добро пожаловать на мою платформу!</h1>
      <p style={{ fontSize: '20px', color: status.includes('Успех') ? 'green' : 'orange' }}>
        {status}
      </p>
    </div>
  )
}

export default App
