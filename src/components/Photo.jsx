import { useState } from 'react'

export default function Photo({ src, alt = '', color = 'from-forest to-emerald-500', className = '', children }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-linear-to-br ${color} ${className}`}>
      {src && !failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {children}
    </div>
  )
}