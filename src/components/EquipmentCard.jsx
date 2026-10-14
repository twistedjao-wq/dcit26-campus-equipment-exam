import { Link } from 'react-router-dom'

export default function EquipmentCard({ item }) {
  const statusText = item.available ? 'Available' : 'In use'

  return (
    <article className="equipment-card">
      <div className="card-top">
        <span className="badge">{item.category}</span>
        <span className={`status ${item.available ? 'available' : ''}`}>
          {statusText}
        </span>
      </div>

      <h2>{item.name}</h2>
      <p className="muted">Location: {item.location}</p>
      <p className="muted">Condition: {item.condition}</p>
      <p className="muted">Availability: {statusText}</p>

      <Link className="text-link" to={`/equipment/${item.id}`}>
        View details
      </Link>
    </article>
  )
}
