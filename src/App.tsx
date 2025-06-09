import { useState } from "react"
import SampleButton from "./components/SampleButton"

export type ButtonVariants = "primary" | "secondary" | "text"
export type ButtonStates = "none" | "disabled" | "inverted"

function App() {
  const [variant, setVariant] = useState<ButtonVariants>("primary")

  const [buttonState, setButtonState] = useState<ButtonStates>("none")

  return (
    <>
      <h1>Manifest Frontend Intern Code challenge 2025</h1>
      <p>Show off your components here</p>
      <div className="border flex flex-col p-8 items-center justify-center gap-8">
        <div className="flex gap-4 border p-2">
          <div className="border flex">
            <button
              className={`toggle-button ${
                variant === "primary" ? "active" : ""
              }`}
              onClick={() => setVariant("primary")}
            >
              Primary
            </button>
            <button
              className={`toggle-button ${
                variant === "secondary" ? "active" : ""
              }`}
              onClick={() => setVariant("secondary")}
            >
              Secondary
            </button>
            <button
              className={`toggle-button ${variant === "text" ? "active" : ""}`}
              onClick={() => setVariant("text")}
            >
              Text
            </button>
          </div>
          <div className="border flex">
            <button
              className={`toggle-button ${
                buttonState === "none" ? "active" : ""
              }`}
              onClick={() => setButtonState("none")}
            >
              Active
            </button>
            <button
              className={`toggle-button ${
                buttonState === "disabled" ? "active" : ""
              }`}
              onClick={() => setButtonState("disabled")}
            >
              Disabled
            </button>
            <button
              className={`toggle-button ${
                buttonState === "inverted" ? "active" : ""
              }`}
              onClick={() => setButtonState("inverted")}
            >
              Inverted
            </button>
          </div>
        </div>

        <SampleButton variant={variant} buttonState={buttonState} />
      </div>
    </>
  )
}

export default App
