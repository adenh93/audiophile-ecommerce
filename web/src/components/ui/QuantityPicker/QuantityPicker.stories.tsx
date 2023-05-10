import type { Meta, StoryObj } from "@storybook/react";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

const meta: Meta<typeof QuantityPicker> = {
  title: "QuantityPicker",
  component: QuantityPicker,
};

export default meta;

type Story = StoryObj<typeof QuantityPicker>;

const Template = () => {
  const [value, setValue] = useState(0);

  return (
    <QuantityPicker
      value={value}
      step={1}
      onDecrement={(step) => setValue((value) => value - step)}
      onIncrement={(step) => setValue((value) => value + step)}
    />
  );
};

export const Primary: Story = {
  render: () => <Template />,
};
