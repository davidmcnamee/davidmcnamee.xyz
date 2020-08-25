import { MyButton } from "./button";

export default {
  title: "MyButton",
  comopnent: MyButton,
};

// export const FirstStory = MyButton.bind({});

export {MyButton};

(MyButton as any).args = {
  primary: true,
  onClick: () => alert("hello!"),
};
