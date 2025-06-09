/// <reference types="vitest/globals" />

import { render, screen } from "@testing-library/react"
import SampleButton from "./SampleButton"
import "@testing-library/jest-dom"

describe("SampleButton", () => {
  it("renders a primary button with no extra styles", () => {
    render(<SampleButton variant="primary" buttonState="none" />)

    const button = screen.getByRole("button", { name: "Continue" })

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("sample-button")
    expect(button).not.toHaveClass("secondary-button")
    expect(button).not.toHaveClass("text-button")
    expect(button).not.toHaveClass("inverted")
    expect(button).toBeEnabled()
  })

  it("renders a secondary button with alternate styles", () => {
    render(<SampleButton variant="secondary" buttonState="none" />)

    const button = screen.getByRole("button", { name: "Continue" })

    expect(button).toHaveClass("sample-button", "secondary-button")
    expect(button).not.toHaveClass("text-button")
    expect(button).not.toHaveClass("inverted")
  })

  it("renders a text button with inverted style", () => {
    render(<SampleButton variant="text" buttonState="inverted" />)

    const button = screen.getByRole("button", { name: "Continue" })

    expect(button).toHaveClass("sample-button", "text-button", "inverted")
    expect(button).toBeEnabled()
  })

  it("renders a disabled button", () => {
    render(<SampleButton variant="primary" buttonState="disabled" />)

    const button = screen.getByRole("button", { name: "Continue" })

    expect(button).toBeDisabled()
  })
})
