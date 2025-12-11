import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
// import "./button.css";
import Button from "../../../components/Buttons/Button";

const meta = {
    component: Button,
    title: "Buttons/Button",
    tags: ["autodocs"],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {},
    parameters: {
        layout: "centered", // <-- centers the component
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Button",
        className: "text-red-500"
    },
};
