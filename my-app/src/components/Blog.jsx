// Blog.jsx
import '../App.css'

export default function BlogEntry({ title, body }) {
  return (
    // <div className="blog-grid">
      <section className="card">
      <div className="title">
        {title}
      </div>
      <div className="body-text">
        {body}
      </div>
    </section>
    // </div>
    
  )
}
