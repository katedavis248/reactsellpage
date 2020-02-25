import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

class Sellpage extends React.Component {
    state = {
        productID: "",
        productscript: "",
        tags: "",
        category: "",
        price: "",

    }
    handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        });
    }

    addProduct = (event) => {
        console.log(this.state)
        //USE THIS CODE WHEN DATABASE IS ADDED
        // axios.post("/api/products/new", {

        //   productID: this.state.productID,
        //  productscript: this.state.productscript,
        //  tags: this.state.tags,
        // category: this.state.category,
        //  price: this.state.price
        // file: this.state.file,
        // })
        //  .then(response => { console.log(response) })
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Product Id</Label>
                        <Input type="email" name="productID" onChange={this.handleInput} id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Product Description</Label>
                        <Input type="password" name="productscript" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Does this item have tags?</Label>
                        <Input type="select" onChange={this.handleInput} name="tags" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Category</Label>
                        <Input type="select" onChange={this.handleInput} name="category" id="exampleSelectMulti" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Pricing </Label>
                        <Input type="text" onChange={this.handleInput} name="price" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" onChange={this.handleInput} name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
        </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" onChange={this.handleInput} name="radio1" />{' '}
                                Option one is this and that—be sure to include why it's great
          </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" onChange={this.handleInput} name="radio1" />{' '}
                                Option two can be something else and selecting it will deselect option one
          </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" onChange={this.handleInput} name="radio1" disabled />{' '}
                                Option three is disabled
          </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Check me out

        </Label>
                    </FormGroup>
                    <Button onClick={this.addProduct}>Submit</Button>

                </Form>


            </div>
        )
    }
}

export default Sellpage;