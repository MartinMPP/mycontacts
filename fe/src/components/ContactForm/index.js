import propTypes from "prop-types";
import { Form, ButtonContainer } from "./styles";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

export default function ContactForm({ buttonLabel }) {
    return (
        <Form>
            <FormGroup>
                <Input placeholder="Nome" />
            </FormGroup>
            <FormGroup>
                <Input placeholder="email" />
            </FormGroup>
            <FormGroup>
                <Input placeholder="Telefone" />
            </FormGroup>
            <FormGroup>
                <Select>
                    <option value="instagram">Instagram</option>
                </Select>
            </FormGroup>
            <ButtonContainer>
                <Button type="submit">
                    {buttonLabel}
                </Button>
            </ButtonContainer>


        </Form>

    );
}

ContactForm.propTypes = {
    buttonLabel: propTypes.string.isRequired
}

