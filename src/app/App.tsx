import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Navbar,
    Nav,
    NavDropdown,
    MenuItem,
    NavItem,
    Panel,
    Row,
    Grid,
    Col,
} from 'react-bootstrap';

class App extends React.Component {
    public render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>

                <Grid>
                    <Row>
                        <Col xs={0} md={1} />
                        <Col xs={12} md={10}>
                            <Panel bsStyle="success" marginWidth={24}>
                                <Panel.Heading>
                                    <Panel.Title>Panel heading</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Panel content</Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={0} md={1} />
                    </Row>
                </Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
