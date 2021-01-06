import React from 'react';
// This is the Link API
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';

const BsNavLink = ({ route, title }) => (
    <Link href={route}>
        <a className="port-navbar-link nav-link"> { title } </a>
    </Link>
);

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {

        const { className } = this.props; 

        return (
            <div>
                <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">{ '< Vishesh_Shukla >' }</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="Home" route="/" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="About" route="/about" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="Portfolio" route="/portfolios" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="Blog" route="/blogs" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="Cv" route="/cv" />
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}