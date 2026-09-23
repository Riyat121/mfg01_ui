export default function SectionHead({ kicker, title, text }) {
  return (
    <div className="sechead">
      <div className="k">{kicker}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
