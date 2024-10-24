import propTypes from "prop-types";
import { useState } from "react";
import isEmailValid from "../../utils/isEmailValid";
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
    const [errors, setErrors] = useState([]);

    console.log(errors)

    function handleNameChange(event) {
        setName(event.target.value)

        if (!event.target.value) {
            setErrors((prevState) => [
                ...prevState,
                { field: 'name', message: 'O nome é obrigatório' }
            ]);
        } else {
            setErrors((prevState) => prevState.filter(
                (error) => error.field !== 'name'
            ))
        }
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)

        if (event.target.value && !isEmailValid(event.target.value)) {
            const errorAlreadyExists = errors.find(
                (error) => error.field === 'email'
            ); if (errorAlreadyExists) {
                return
            }


            setErrors((prevState) => [
                ...prevState,
                { field: 'email', message: 'Email inválido' }
            ])
        } else {
            setErrors((prevState) => prevState.filter(
                (error) => error.field !== 'email'
            ))
        }
    }

    function getErrorMessageByFieldName(fieldName) {
        console.log(errors.find((error) => error.field === fieldName)?.message)
        return errors.find((error) => error.field === fieldName)?.message;
    }


    function handleSubmit(event) {
        event.preventDefault();

        console.log({ name, email, phone, category });
    }

    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup error={getErrorMessageByFieldName('name')}>
                <Input
                    error={getErrorMessageByFieldName('name')}
                    placeholder="Nome"
                    value={name}
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('email')}>
                <Input
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
                    onChange={(event) => setPhone(event.target.value)}
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

