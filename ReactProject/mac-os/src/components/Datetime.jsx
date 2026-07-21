import { useEffect, useState } from 'react'

const Datetime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(timer)
  }, [])

  const weekday = now.toLocaleDateString('en-US', { weekday: 'short' })
  const day = now.getDate()
  const month = now.toLocaleDateString('en-US', { month: 'short' })
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <div>
      {weekday} {day} {month} {time}
    </div>
  )
}

export default Datetime
