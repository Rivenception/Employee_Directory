import './App.css';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="userSearch"
                      // value={recipeSearch}
                      // onChange={handleInputChange}
                      placeholder="Search For a User"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      // onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {/* <RecipeList >
              {recipes.map(recipe => (
                <RecipeListItem
                  key={recipe.title}
                  title={recipe.title}
                  href={recipe.href}
                  ingredients={recipe.ingredients}
                  thumbnail={recipe.thumbnail}
                />
              ))}
            </RecipeList > */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
