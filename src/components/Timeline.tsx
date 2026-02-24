interface TimelineRowProps {
  time: string
  activity: string
  desc: string
}

export default function TimelineRow({ time, activity, desc }: TimelineRowProps) {
  return (
    <div className="timeline-row">
      <span className="timeline-time">{time}</span>
      <span className="timeline-dot" />
      <div className="timeline-content">
        <h4>{activity}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}
