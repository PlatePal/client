import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "../App";
import { shallow } from "enzyme";
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

// it("CheckboxWithLabel changes the text after click", () => {
//   const { queryByText, getByTestId } = render(<App />);
//   expect(queryByText("Login")).toBeTruthy;
//   expect(queryByText("Register")).toBeTruthy;
//   expect(getByTestId("logo")).toBeTruthy;
// });

test("CheckboxWithLabel changes the text after click", () => {
  // Render a checkbox with label in the document
  const app = shallow(<App />);

  //   expect(App.exists).toBeTruthy();
});
