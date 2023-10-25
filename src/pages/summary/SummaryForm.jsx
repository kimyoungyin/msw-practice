import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SummaryForm = () => {
    const [checked, setChecked] = useState(false);

    const checkboxLabel = (
        <span>
            I agree to{" "}
            <span style={{ color: "blue" }}>Terms and Conditions</span>
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
