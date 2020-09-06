import { MyButton } from "./button";

export default {
  title: "MyButton",
  component: MyButton,
};

export const Basic = (args) => <MyButton {...args} />;
Basic.args = {
  children: "hello",
};
