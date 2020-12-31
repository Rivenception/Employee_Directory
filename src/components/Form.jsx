import { Container, Row, Col } from "./Grid";
import Button from "./Button";
import Input from "./Input";

function Form(props) {
  return (
    <form>
      <Container>
        <Row>
          <Col size="xs-9 sm-10">
            <Input
              name="userSearch"
              value={props.userSearch}
              onChange={props.handleInputChange}
              placeholder="Search For a User"
            />
          </Col>
          <Col size="xs-3 sm-2">
            <Button
              onClick={props.handleFormSubmit}
              type="success"
              className="input-lg"
            >
                Search
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default Form;