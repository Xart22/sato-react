import React from "react";
import sato from "../../assets/img/sato.png";
import { Container, Search, Grid, Icon, Button } from "semantic-ui-react";
import _ from "lodash";

const source = "";

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function exampleReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}
const Navbar = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <div className="headerNav">
      <Container>
        <div className="item-header-2 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <a href="/">
              <img className="img-sato mr-3" src={sato} alt="Sato" />
            </a>
            <Grid>
              <Grid.Column width={8}>
                <Search
                  loading={loading}
                  onResultSelect={(e, data) =>
                    dispatch({
                      type: "UPDATE_SELECTION",
                      selection: data.result.title,
                    })
                  }
                  onSearchChange={handleSearchChange}
                  results={results}
                  value={value}
                />
              </Grid.Column>
            </Grid>

            <Button animated="vertical">
              <Button.Content hidden>Shop</Button.Content>
              <Button.Content visible>
                <Icon name="shop" />
              </Button.Content>
            </Button>
            <span className="mr-3 line">|</span>
            <a href="/daftar">
              <button className="btn-auth">Masuk / Daftar</button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
