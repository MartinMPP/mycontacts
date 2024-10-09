import PageHeader from "../../components/PageHeader"
import { Form } from "../../components/ContactForm/styles"
import ContactForm from "../../components/ContactForm"

export default function NewContact() {
    return (
        <>
            <PageHeader
                title="Novo Contato"
            />
            <Form>
                <ContactForm buttonLabel="Cadastrar" />
            </Form>

        </>
    )
}

