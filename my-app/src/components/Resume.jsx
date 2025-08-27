export default function Resume({ role, date, skills, description }) {
  return (
    <section id = "resume">
<section className="job-card-container">
      <section className="job-card">
        <div className="role-info">
          <h2>{role}</h2>
            <div className="skills">{skills}</div>

          <div className="date">
            <h3>{date}</h3>
          </div>
        </div>


        {/* Render description as bullet points if it's an array */}
        {Array.isArray(description) ? (
          <ul className="description">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <div className="description">{description}</div>
        )}
      </section>
    </section>
    </section>
    
  );
}
