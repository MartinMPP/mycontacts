import propTypes from "prop-types";
import { useState } from "react";
import formatPhone from "../../utils/formatPhone";
import isEmailValid from "../../utils/isEmailValid";
import useErrors from "../../hooks/useErrors";
import { Form, ButtonContainer } from "./styles";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
export default function ContactForm({ buttonLabel }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

    const isFormValid = (name && errors.length === 0 && phone)



    function handleNameChange(event) {
        setName(event.target.value)

        if (!event.target.value) {
            setError({ field: 'name', message: 'Nome obrigatório' })
        } else {
            removeError('name')
        }
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)

        if (event.target.value && !isEmailValid(event.target.value)) {
            setError({ field: 'email', message: 'Email inválido' })

        } else {
            removeError('email')
        }
    }

    function handlePhoneChange(event) {
        setPhone(formatPhone(event.target.value))
    }

    function handleSubmit(event) {
        event.preventDefault();

        // console.log({ name, email, phone, category });
    }

    return (
        <Form onSubmit={handleSubmit} noValidate >
            <FormGroup error={getErrorMessageByFieldName('name')}>
                <Input
                    error={getErrorMessageByFieldName('name')}
                    placeholder="Nome*"
                    value={name}
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('email')}>
                <Input
                    type="email"
                    error={getErrorMessageByFieldName('email')}
                    placeholder="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    placeholder="Telefone"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="15"
                />
            </FormGroup>

            <FormGroup>
                <Select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="">Categoria</option>
                    <option value="instagram">Instagram</option>
                    <option value="Discord">Discord</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit" disabled={!isFormValid}>
                    {buttonLabel}
                </Button>
            </ButtonContainer>


        </Form>

    );
}

ContactForm.propTypes = {
    buttonLabel: propTypes.string.isRequired
}

