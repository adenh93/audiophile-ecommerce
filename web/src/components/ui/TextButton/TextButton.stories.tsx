import type { Meta, StoryObj } from "@storybook/react";
import TextButton from "./TextButton";

const meta: Meta<typeof TextButton> = {
  title: "TextButton",
  component: TextButton,
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Primary: Story = {
  args: {
    children: "Shop",
  },
};
