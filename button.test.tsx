import React from "react";
import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./src/Button";

describe("<Button />", () => {
  it("renders the children correctly", () => {
    render(<Button>Continue</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Continue");
  });

  it("applies empty string as default if no children are specified", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveTextContent("");
  });

  it("applies default classes for variant and device", () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("btn-primary");
    expect(btn).toHaveClass("btn-desktop");
  });

  it("applies correct variant and device classes", () => {
    render(
      <Button variant="secondary" device="mobile">
        Go
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("btn-secondary");
    expect(btn).toHaveClass("btn-mobile");
  });

  it("adds inverted class when inverted prop is true", () => {
    render(<Button inverted>Inverted</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-inverted");
  });

  it("sets the disabled attribute when disabled is true", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });
});
