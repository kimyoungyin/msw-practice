import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

it("Initial conditions", () => {
    render(<SummaryForm />);

    const checkbox = screen.queryByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.queryByRole("button", {
        name: /confirm order/i,
    });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
});

it("Enables confirm button when checkbox is clicked disables it when click again", () => {
    render(<SummaryForm />);

    const checkbox = screen.queryByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.queryByRole("button", {
        name: /confirm order/i,
    });
    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
});
