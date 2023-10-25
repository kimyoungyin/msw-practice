import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

it("Initial conditions", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.queryByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.queryByRole("button", {
        name: /confirm order/i,
    });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
});

it("Enables confirm button when checkbox is clicked disables it when click again", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.queryByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.queryByRole("button", {
        name: /confirm order/i,
    });
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
});

it("popover responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(
        /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(
        /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
});
