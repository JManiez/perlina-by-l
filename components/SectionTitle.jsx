export default function SectionTitle({ eyebrow, children, lead, center = false, pearls = false }) {
  return (
    <div className={center ? "t-center" : ""}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{children}</h2>
      {pearls && (
        <div className={`orn ${center ? "center" : ""}`}>
          <span className="pearl sm" />
          <span className="pearl" />
          <span className="pearl sm" />
        </div>
      )}
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
