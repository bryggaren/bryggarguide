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
                            <a href="#home">Bryggarens Lathund</a>
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
                            <Panel defaultExpanded>
                                <Panel.Heading>
                                    <Panel.Toggle>
                                        Begrepp / Förklaringar till parametrar som används i
                                        beräkningarna
                                    </Panel.Toggle>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        <Row>
                                            <Col md={12}>
                                                <div>
                                                    <b>Öchsle</b>: Hydrometerskala för mätning av
                                                    densiteten på vätska{' '}
                                                    <b>(temperaturberoende).</b> 1 grad öchlse (<b>
                                                        °Ö
                                                    </b>) motsvarar t.ex 1 grams skillnad mellan 1
                                                    liter vört och 1 liter vatten vid <b>20 °C</b>.
                                                </div>
                                                <div>
                                                    <b>Öchsleliter (°Öl)</b>:{' '}
                                                    <code>
                                                        Vörtens densitet (°Ö) * vörtens volym (l)
                                                    </code>. Används för beräkningar av resulterande
                                                    SG eller spädningsvolymer.
                                                </div>
                                                <div>
                                                    <b>SG (°Ö)</b>: Specific Gravity - En vätskas
                                                    (vörtens) densitet. Mäts ofta med hydrometer och
                                                    är intressant innan jäsning (
                                                    <b>OG</b>) samt efter jäsning (<b>FG</b>). Genom
                                                    att subtrahera OG med FG kan man beräkna
                                                    alkoholhalten på ölet.
                                                </div>
                                                <div>
                                                    <b>Pre-boil OG (°Ö)</b>: Mätning som görs när
                                                    vörten kokat 5-10 minuter för att kunna beräkna
                                                    om man kommer att träffa beräknat OG, eller om
                                                    man måste vidta åtgärder (t.ex. spädning, höja
                                                    sockerhalten eller förlänga koktiden). Verkligt
                                                    OG kommer att vara ca: 5-10 °Ö högre.
                                                </div>
                                                <div>
                                                    <b>OG (°Ö)</b>: Original Gravity - Vörtens
                                                    densitet innan jäsning
                                                </div>
                                                <div>
                                                    <b>FG (°Ö)</b>: Final Gravity - Vörtens densitet
                                                    efter jäsning.
                                                </div>
                                                <div>
                                                    <b>Utbyte (%)</b>:{' '}
                                                    <code>
                                                        Extraktmängd (°Öl) / Teoretisk extraktmängd
                                                        (°Öl)
                                                    </code>. Kan beräknas efter mäskning, dvs hur
                                                    mycket av tillsatt malt som omvandlats till
                                                    maltsocker. Den teoretiska extraktmängden kan
                                                    beräknas med värden från tabeller. Vanliga
                                                    värden är 70-85 %, beroende på process.
                                                </div>
                                                <div>
                                                    <b>Brygghuseffektivitet (%)</b>:{' '}
                                                    <code>
                                                        (Vörten (°Ö) * Volym i jäskärl (l)) /
                                                        (Teoretiskt värde (°Ö) * Volym vid kok inkl.
                                                        tillsatt vatten (l))
                                                    </code>{' '}
                                                    Ungefär som utbyte, men man tar också hänsyn
                                                    till volymen som hamnar i jäskärlet. Att känna
                                                    till sin brygghuseffektivitet är en stor hjälp
                                                    för att kunna nå förväntat OG samt volym i
                                                    jäskärlet upprepade gånger. Vanliga värden är
                                                    65-80 %.
                                                </div>
                                                <div>
                                                    <b>Bortkok (l/timme)</b>: Hur mycket av vörtens
                                                    volym som försvinner vid kok. Måste mätas fram
                                                    individuellt beroende på process, värmekälla
                                                    etc. Vanliga värden är 3,5 - 5 liter/timme vid
                                                    20 liters batcher.
                                                </div>
                                            </Col>
                                        </Row>
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
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
