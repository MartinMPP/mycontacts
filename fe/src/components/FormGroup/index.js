
import propTypes from "prop-types";
import { Container } from "./styles";


export default function FormGroup({ children, error }) {
    console.log(error)
    return (
        <Container>
            {children}
            {error && <small>{error}</small>}
        </Container>
    )
}

FormGroup.propTypes = {
    children: propTypes.node.isRequired,
    error: propTypes.string,
}

FormGroup.defaultProps = {
    error: null,
}
