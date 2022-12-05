import { Slider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { AiOutlineDown } from "react-icons/ai";
import './sidebar.css';


const Sidebar = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);


    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };



    const [value, setValue] = React.useState([0, 100]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (<>

        <aside className="filtering-sidebar container" controller="List" style={{ width: "300px" }}>
            <div className="filtering__widget">
                <div data-toggle="collapse" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text"
                    aria-expanded={open1} href="#catCollapse" role="button" className="filtering__widget-title mb-3 d-flex justify-content-between collapsed">
                    <h5>Category</h5>
                    <i >{AiOutlineDown}</i>
                </div>
                <Collapse in={open1}>
                    <div className="filtering__panel" id="example-collapse-text">
                        <div className="form-group mb-3">
                            <input type="text" placeholder="search" className="form-control" />
                        </div>
                        <div className="filtering-sidebar-scroll">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkCat29" className="custom-control-input" value="29" />
                                <label htmlFor="chkCat29" className="custom-control-label">Oriental Sweets</label>
                                <div className="sub-list pl-2">
                                    <div className="form-group custom-control custom-checkbox">
                                        <input type="checkbox" id="chkChildCat30 " checked={checked} onChange={handleChange} className="custom-control-input" value="30" />
                                        <label htmlFor="chkChildCat30" className="custom-control-label">Western Sweets</label>
                                    </div>
                                    <div className="form-group custom-control custom-checkbox">
                                        <input type="checkbox" id="chkChildCat33" checked={checked} className="custom-control-input" value="33" />
                                        <label htmlFor="chkChildCat33" className="custom-control-label ">Gateaux</label>
                                    </div>
                                    <div className="form-group custom-control custom-checkbox">
                                        <input type="checkbox" id="chkChildCat42" checked={checked} className="custom-control-input" value="42" />
                                        <label htmlFor="chkChildCat42" className="custom-control-label ">Cakes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
                <button type="button" className="clear__filter">Clear</button>
            </div>
            <div className="filtering__widget">
                <div data-toggle="collapse" href="#brandCollapse" role="button" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}
                    className="filtering__widget-title mb-3 d-flex justify-content-between collapsed ">
                    <h5>Size</h5>
                    <i>{AiOutlineDown}</i>
                </div>
                <Collapse in={open2}>
                    <div className="filtering__panel" id="example-collapse-text">
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Search" className="form-control" />
                        </div>
                        <div className="filtering-sidebar-scroll">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize130" className="custom-control-input" value="130" />
                                <label htmlFor="chkSize130" className="custom-control-label">019</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize90" className="custom-control-input" value="90" />
                                <label htmlFor="chkSize90" className="custom-control-label">02</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize131" className="custom-control-input" value="131" />
                                <label htmlFor="chkSize131" className="custom-control-label">020</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize88" className="custom-control-input" value="88" />
                                <label htmlFor="chkSize88" className="custom-control-label">021</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize105" className="custom-control-input" value="105" />
                                <label htmlFor="chkSize105" className="custom-control-label">022</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize141" className="custom-control-input" value="141" />
                                <label htmlFor="chkSize141" className="custom-control-label">023</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize109" className="custom-control-input" value="109" />
                                <label htmlFor="chkSize109" className="custom-control-label">025</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize120" className="custom-control-input" value="120" />
                                <label htmlFor="chkSize120" className="custom-control-label">035</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize142" className="custom-control-input" value="142" />
                                <label htmlFor="chkSize142" className="custom-control-label">037</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize89" className="custom-control-input" value="89" />
                                <label htmlFor="chkSize89" className="custom-control-label">040</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize100" className="custom-control-input" value="100" />
                                <label htmlFor="chkSize100" className="custom-control-label">Default</label>
                            </div>
                        </div>
                    </div>
                </Collapse>
                <button type="button" className="clear__filter">Clear</button>
            </div>
            <div className="filtering__widget">
                <div data-toggle="collapse" href="#priceCollapse" role="button" onClick={() => setOpen3(!open3)}
                 aria-controls="example-collapse-text" aria-expanded={open3}
                    className="filtering__widget-title mb-3 d-flex justify-content-between">
                    <h5>Price</h5>
                    <i>{AiOutlineDown}</i>
                </div>
                <Collapse in={open3}>
                    <div className="filtering__panel" id="example-collapse-text">
                        <div style={{margin: 'auto',display: 'block', width: "100%"}}>
                            <Typography id="range-slider" gutterBottom style={{color:"white"}}></Typography>
                            <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto"/>
                            <div fragment="1eeb0e19fa" className="slider-result">
                                <span id="minrangeSliderResult">{value[0]} EGP</span> -
                                <span id="maxrangeSliderResult"> {value[1]} EGP</span>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className="d-flex justify-content-between pt-2">
                <button type="button" className="btn btn-dark">Reset</button>
                <button type="button" className="btn btn-dark">Filter Now</button>
            </div>
        </aside>















    </>
    );
}

export default Sidebar;
