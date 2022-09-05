import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactsEdit from "./ContactsEdit";

describe("<ContactsEdit />", () => {
  test("it should mount", () => {
    render(<ContactsEdit />);

    const ContactsEdit = screen.getByTestId("ContactsEdit");

    expect(ContactsEdit).toBeInTheDocument();
  });
});
