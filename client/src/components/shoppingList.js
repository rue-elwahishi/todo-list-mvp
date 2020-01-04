import React, { Component } from "react";
import axios from "axios";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { render } from "react-dom";

export default class ShoppingList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get("/API/item", {})
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSumbit(e) {
    e.preventDefault();
    console.log(e);
  }
  // I need to axios.post
  // delete axios.delete
  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <Container>
        <Button
          color="light"
          style={{ marginBottom: "2rem" }}
          className="btn btn-outline-warning"
          onClick={e => {
            e.preventDefault();
            const name = prompt("Enter Name");
            axios.post("/API/item", { name }).then(res => {
              console.log(res);
              console.log(res.data);
            });
            // if (name) {
            //   this.setState(state => ({
            //     items: [...state.items, { id: uuid(), name }]
            //   }));
            // }
          }}
          class="text-monospace"
        >
          WHAT ARE YOU DOING TODAY?
        </Button>
        <ListGroup>
          <TransitionGroup className="Todo">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem class="list-group-item active">
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={e => {
                      const url = `API/item/`;
                      e.preventDefault();
                      axios
                        .delete(url + _id)
                        .then(res => {
                          console.log(res.data);
                          this.setState({ items: res.data });
                        })
                        .catch(err => {
                          console.log(err);
                        });
                    }}
                  ></Button>

                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
