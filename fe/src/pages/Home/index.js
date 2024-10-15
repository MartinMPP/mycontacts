import { Container, InputSearchContainer, Header, ListContainer, Card } from "../../pages/Home/styles";
import arrow from "../../assets/images/icons/arrow.svg"
import edit from "../../assets/images/icons/edit.svg"
import trash from "../../assets/images/icons/trash.svg"
import { Link } from "react-router-dom";
<<<<<<< HEAD
// import Modal from "../../components/Modal";
// import Loader from "../../components/Loader";
=======
import Modal from "../../components/Modal";
>>>>>>> d2c9db3a34372c1dffbe0256d7ab93f5380dcfdc

export default function Home() {
    return (
        <Container>
<<<<<<< HEAD
            {/* <Modal danger/> */}
            {/* <Loader /> */}
=======
            <Modal danger/>
>>>>>>> d2c9db3a34372c1dffbe0256d7ab93f5380dcfdc

            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar contato" />
            </InputSearchContainer>
            <Header>
                <strong>3 contatos</strong>
                <Link to="new">Novo contato</Link>
            </Header>
            <ListContainer>
                <header>
                    <button type="button" className="sort-button">
                        <span>Nome</span>
                        <img src={arrow} alt="seta" />
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Nome Sobrenome</strong>
                            <small>Instagram</small>
                        </div>
                        <span>nome@dominio.com</span>
                        <span>99 99999-9999</span>
                    </div>
                    <div className="actions">
                        <Link to="edit/123"><img src={edit} alt="edit" /></Link>
                        <button type="button"><img src={trash} alt="delete" /></button>
                    </div>
                </Card>

            </ListContainer>
        </Container>
    )
}

