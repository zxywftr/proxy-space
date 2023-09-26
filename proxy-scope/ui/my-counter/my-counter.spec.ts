import { render } from "@testing-library/vue";
import { BasicMyCounter } from "./my-counter.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicMyCounter);
  const rendered = getByText(/Hello World/);
  expect(rendered).toBeTruthy();
});
