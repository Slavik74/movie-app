import React from 'react';
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import './MenuBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faLongArrowAltUp, faLongArrowAltDown)

export default function MenuBar({filterText, sortType, handleFilter, handleSortBy, handleSortAsc, handleSortDesc}) {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="primary">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* Filter */}
                    <Nav className="search">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Search:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Search actor" aria-label="Filter"value={filterText} onChange={handleFilter}  />
                        </InputGroup>
                    </Nav>
                    <p>&nbsp;</p>
                    {/* Sort */}
                    <Nav className="sort">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Sort:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <select className="form-control sort" name="Sort" onChange={handleSortBy}>
                                    <option defaultValue="1">Select</option>
                                    <option value="1">First Name</option>
                                    <option value="2">Last Name</option>
                                    <option value="3">Age</option>
                            </select>
                            <div className="arrows">

                                <FontAwesomeIcon style={{ cursor: "pointer" }} icon="long-arrow-alt-down" values={sortType} size="lg" color={sortType==='Asc'? '#d0cfca': '#0275df'}
                                    onClick={handleSortAsc} />
                                <FontAwesomeIcon style={{ cursor: "pointer" }} icon="long-arrow-alt-up" values={sortType} size="lg" color={sortType==='Desc'? '#d0cfca': '#0275df'}
                                    onClick={handleSortDesc}/>

                            </div>
                        </InputGroup>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            
            

        </div>
    );
};
