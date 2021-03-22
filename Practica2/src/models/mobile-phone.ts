import Phone from "./phone";

export default class MobilePhone extends Phone {
  constructor(number: number) {
    super(number);
  }

  type(): string {
    return "mobile";
  }
}
