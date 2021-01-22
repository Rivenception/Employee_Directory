import { Container, Row, Col } from "./Grid";
import Button from "./Button";
import Input from "./Input";

function Form(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <Container>
        <Col size="xs-3 sm-12">
          <Input
            name="stateFilter"
            value={props.stateFilter}
            onChange={props.handleInputChange}
            placeholder="Filter by State"
          />
        </Col>
        <br/>
        <Row>
          <Col size="xs-4 sm-6">
            <Button
              onClick={props.handleFormSubmit}
              type="success"
              className="input-lg"
            >
              Filter By State
            </Button>
          </Col>
          <Col size="xs-4 sm-6">
            <Button
              onClick={props.sortName}
              type="success"
              className="input-lg"
            >
              Sort By Name
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default Form;
