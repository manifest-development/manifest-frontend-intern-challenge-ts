import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Continue', 
    variant: 'primary',
    state: 'active',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
    },
    state: {
      control: 'select',
      options: ['active', 'disabled', 'inverted'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryActive: Story = {
  args: {
    variant: 'primary',
    state: 'active',
    children: 'Continue',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    state: 'disabled',
    children: 'Continue',
  },
};

export const PrimaryInverted: Story = {
  args: {
    variant: 'primary',
    state: 'inverted',
    children: 'Continue',
  },
};

export const SecondaryActive: Story = {
  args: {
    variant: 'secondary',
    state: 'active',
    children: 'Continue',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary', 
    state: 'disabled',
    children: 'Continue',
  },
};

export const SecondaryInverted: Story = {
  args: {
    variant: 'secondary',
    state: 'inverted',
    children: 'Continue',
  },
};

export const TextActive: Story = {
  args: {
    variant: 'text',
    state: 'active',
    children: 'Continue',
  },
};

export const TextDisabled: Story = {
  args: {
    variant: 'text',
    state: 'disabled',
    children: 'Continue',
  },
};

export const TextInverted: Story = {
  args: {
    variant: 'text',
    state: 'inverted',
    children: 'Continue',
  },
};

export const WithLongText: Story = {
  args: {
    children: 'This is a very long button text to demonstrate how the button handles long content',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span style={{ marginRight: '8px' }}>★</span>{' '}
        With Icon
      </>
    ),
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>★</span>
        <span>Complex</span>
        <small>Content</small>
      </div>
    ),
  },
};

export const WithClickHandler: Story = {
  args: {
    onClick: () => alert('Button clicked!'),
    children: 'Click me',
  },
};

export const WithCustomStyles: Story = {
  render: (args) => (
    <div style={{ width: '200px' }}>
      <Button {...args} />
    </div>
  ),
  args: {
    children: 'Custom Width',
  },
};
