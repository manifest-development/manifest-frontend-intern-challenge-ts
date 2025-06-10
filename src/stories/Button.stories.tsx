import type { ComponentProps } from "react";
import { Button } from "../components/button/Button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'text'],
            control: {
                type: "select",
            }
        },
        active: {
            control: 'boolean',
        },
        invertOnHover: {
            control: 'boolean',
        },
        mobile: {
            control: 'boolean',
        },   
    },
    args: {
            onClick: fn(),
        }
};



export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        buttonText: 'Continue',
        variant: 'primary',
        active: true,
        invertOnHover: false,
        mobile: false,

    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>
            {buttonText}
        </Button>;
    }
};

export const Secondary: Story = {
    args: {
        buttonText: 'Continue',
        variant: 'secondary',
        active: true,
        invertOnHover: false,
        mobile: false,

    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>
            {buttonText}
        </Button>;
    }
};


export const Text: Story = {
    args: {
        buttonText: 'Continue',
        variant: 'text',
        active: true,
        invertOnHover: false,
        mobile: false,

    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>
            {buttonText}
        </Button>;
    }
};
