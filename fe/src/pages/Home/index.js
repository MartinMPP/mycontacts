import { Container, InputSearchContainer, Header, ListHeader, Card } from "../../pages/Home/styles";
import arrow from "../../assets/images/icons/arrow.svg"
import edit from "../../assets/images/icons/edit.svg"
import trash from "../../assets/images/icons/trash.svg"
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Loader from "../../components/Loader";
import ContactsServices from "../../services/ContactsServices";




export default function Home() {
    const [contacts, setContacts] = useState([])
    const [orderBy, setOrderBy] = useState('asc')
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const filteredContacts = useMemo(() => contacts.filter((contact) => (contact.name.toLowerCase().includes(searchTerm.toLowerCase()))), [contacts, searchTerm])



    useEffect(() => {
        async function loadContacts() {
            try {
                setIsLoading(true)

                const contactsList = await ContactsServices.listContacts(orderBy)

                if (contactsList) {
                    setContacts(contactsList)
                }else {
                    console.log('erro na API')
                }

            } catch (error) {
                console.log('Caiu no erro', error)
            } finally{
                setIsLoading(false)
            }
        }

        loadContacts()
    }, [orderBy])


    function handleToogleOrderBy() {
        setOrderBy(
            (prevState) => (prevState === 'asc' ? 'desc' : 'asc')
        )
    }

    function handleChangeSearchTerm(event) {
        setSearchTerm(event.target.value)
    }

    return (
        <Container>
            <Loader isLoading={isLoading} />
            <InputSearchContainer>
                <input
                    value={searchTerm}
                    type="text"
                    placeholder="Pesquisar contato"
                    onChange={handleChangeSearchTerm}
                />
            </InputSearchContainer>
            <Header>
                <strong>
                    {filteredContacts.length}
                    {filteredContacts.length === 1 ? ' contato' : ' contatos'}
                </strong>
                <Link to="new">Novo contato</Link>
            </Header>
            {filteredContacts.length > 0 && (
                <ListHeader orderBy={orderBy}>
                    <button type="button"
                        onClick={handleToogleOrderBy}
                        className="sort-button">
                        <span>Nome</span>
                        <img src={arrow} alt="seta" />
                    </button>
                </ListHeader>
            )}

            {filteredContacts.map((contact) => (

                <Card key={contact.id}>
                    <div className="info">
                        <div className="contact-name">
                            <strong>{contact.name}</strong>
                            {contact.category_name && (<small>{contact.category_name}</small>)}
                        </div>
                        <span>{contact.email}</span>
                        <span>{contact.phone}</span>
                    </div>
                    <div className="actions">
                        <Link to={`/edit/${contact.id}`}><img src={edit} alt="edit" /></Link>
                        <button type="button"><img src={trash} alt="delete" /></button>
                    </div>
                </Card>
            ))}

        </Container>
    )
}




