import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const children = "See product";

export const Primary: Story = {
  args: {
    variant: "primary",
    children,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children,
  },
};
