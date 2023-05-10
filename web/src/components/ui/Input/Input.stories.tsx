import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const label = "Name";
const placeholder = "Insert your name";

export const Primary: Story = {
  args: {
    label,
    placeholder,
  },
};

export const ErrorState: Story = {
  args: {
    label,
    placeholder,
    error: "Wrong format",
  },
};
