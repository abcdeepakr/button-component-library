import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
};

export const Air = Template.bind({});
Air.args = {
  variant: "air",
  label:"Air",
  size:"lg"
};
export const Fire = Template.bind({});
Fire.args = {
  variant: "fire",
  label:"Fire",
  size:"med"
};
export const Forest = Template.bind({});
Forest.args = {
  variant: "forest",
  label:"Forest",
  size:"sm"
};
export const Water = Template.bind({});
Water.args = {
  variant: "water",
  label:"Water",
  size:"lg",
  "border-radius":"true",
};
export const FireOutline = Template.bind({});
FireOutline.args = {
  variant: "fire-outline",
  label:"Fire Outline",
  size:"lg",
  "border-radius":"true",
};
export const ForestOutline = Template.bind({});
ForestOutline.args = {
  variant: "forest-outline",
  label:"Forest Outline",
  size:"lg",
  "border-radius":"true",
};
