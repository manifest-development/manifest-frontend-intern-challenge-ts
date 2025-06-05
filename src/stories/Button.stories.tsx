import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../Button";

// --- Meta config ---
const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "text"],
    },
    device: {
      control: { type: "radio" },
      options: ["desktop", "mobile"],
    },
    disabled: { control: "boolean" },
    inverted: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    device: "desktop",
    disabled: false,
    inverted: false,
    children: "Continue",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    device: "desktop",
    children: "Back",
  },
};

export const TextButton: Story = {
  args: {
    variant: "text",
    device: "desktop",
    children: "Cancel",
  },
};

export const MobileInverted: Story = {
  args: {
    variant: "primary",
    device: "mobile",
    inverted: true,
    children: "Submit",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    device: "desktop",
    disabled: true,
    children: "Disabled",
  },
};
