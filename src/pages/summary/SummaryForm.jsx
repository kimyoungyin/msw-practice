import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

const SummaryForm = () => {
    const [checked, setChecked] = useState(false);

    const popover = (
        <Popover>
            <Popover.Body>No ice cream will actually be delivered</Popover.Body>
        </Popover>
    );

    const checkboxLabel = (
        <span>
            I agree to
            <OverlayTrigger placement="right" overlay={popover}>
                <span style={{ color: "blue" }}>Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    );

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Form.Group>
                <Button variant="primary" disabled={!checked} type="submit">
                    Confirm order
                </Button>
            </Form.Group>
        </Form>
    );
};

export default SummaryForm;
