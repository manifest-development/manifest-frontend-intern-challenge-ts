import Button from "./Button"

function App() {
  return (
    <>
      <h1>Manifest Frontend Intern Code challenge 2025</h1>
      <p>Button Component Showcase</p>
      <section className="btn-component-container">
        <div className="variant-section">
          <h3>Primary (Mobile)</h3>
          <div className="button-row">
            <Button variant="primary" size="mobile" active>Active</Button>
            <Button variant="primary" size="mobile" disabled>Disabled</Button>
          </div>
        </div>
        <div className="variant-section">
          <h3>Primary (Desktop)</h3>
          <div className="button-row">
            <Button variant="primary" size="desktop" active>Active</Button>
            <Button variant="primary" size="desktop" disabled>Disabled</Button>
          </div>
        </div>
        <div className="variant-section">
          <h3>Secondary (Mobile)</h3>
          <div className="button-row">
            <Button variant="secondary" size="mobile" active>Active</Button>
            <Button variant="secondary" size="mobile" disabled>Disabled</Button>
          </div>
        </div>
        <div className="variant-section">
          <h3>Secondary (Desktop)</h3>
          <div className="button-row">
            <Button variant="secondary" size="desktop" active>Active</Button>
            <Button variant="secondary" size="desktop" disabled>Disabled</Button>
          </div>
        </div>
        <div className="variant-section">
          <h3>Text (Mobile)</h3>
          <div className="button-row">
            <Button variant="text" size="mobile" active>Active</Button>
            <Button variant="text" size="mobile" disabled>Disabled</Button>
          </div>
        </div>
        <div className="variant-section">
          <h3>Text (Desktop)</h3>
          <div className="button-row">
            <Button variant="text" size="desktop" active>Active</Button>
            <Button variant="text" size="desktop" disabled>Disabled</Button>
          </div>
        </div>
        <div className="variant-section">
          <h3>Inverted (Mobile)</h3>
          <div className="button-row">
            <Button size="mobile" inverted>Inverted</Button>
          </div>
        </div>
        <div className="variant-section">
          <h3>Inverted (Desktop)</h3>
          <div className="button-row">
            <Button size="desktop" inverted>Inverted</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
