import Phone from "./phone";

export default class FixedPhone extends Phone {
  constructor(number: number) {
    super(number);
  }

  type(): string {
    return "fixed";
  }
}
