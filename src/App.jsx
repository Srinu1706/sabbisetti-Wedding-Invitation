import './App.css'

function App() {
  return (
    <main className="invitation">
      <div className="sparkle sparkle-one" aria-hidden="true" />
      <div className="sparkle sparkle-two" aria-hidden="true" />
      <div className="sparkle sparkle-three" aria-hidden="true" />

      <section className="announcement" aria-label="Wedding announcement">
        <div className="person-name">
          <h1>Santhosh Kumar</h1>
          <span className="title">C.A.</span>
        </div>
        <p className="weds">weds</p>
        <div className="person-name">
          <h2>Vishnu Priya</h2>
          <span className="title">C.A.</span>
        </div>
      </section>
    </main>
  )
}

export default App
