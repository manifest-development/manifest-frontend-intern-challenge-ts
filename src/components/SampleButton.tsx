import type { ButtonStates, ButtonVariants } from "../App"

type ButtonProps = {
  variant: ButtonVariants
  buttonState: ButtonStates
}

const SampleButton = ({ variant, buttonState }: ButtonProps) => {
  let styles = ""
  const inverted = buttonState === "inverted" ? "inverted" : ""
  if (variant === "primary") {
    styles = ""
  } else if (variant === "secondary") {
    styles = "secondary-button"
  } else if (variant === "text") {
    styles = "text-button"
  }

  return (
    <button
      className={`sample-button ${styles} ${inverted}`}
      disabled={buttonState === "disabled"}
    >
      Continue
    </button>
  )
}

export default SampleButton
