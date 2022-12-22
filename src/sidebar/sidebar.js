import { Slider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { AiOutlineDown } from "react-icons/ai";
import './sidebar.css';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import {useRef} from 'react';

///////// import Child from './Child'; 

const Sidebar = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
        setChecked1(!checked1);
    };
    const handleChange1 = () => {
        setChecked1(!checked1);
    };
    const handleChange4 = () => {
        setChecked4(!checked4);
    };
    const [value, setValue] = React.useState([0, 100]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    const [inpValue1, setInpValue1] = useState()
    const [inpValue2, setInpValue2] = useState()

    const resetForm1 = () => {
        setInpValue1("")
        setChecked(false);
        setChecked1(false);
    }
    const resetForm2 = () => {
        setInpValue2("")
        setChecked4(false);
    }
    const resetForm3 = () => {
        setValue([0, 100]);
    }

    // const params= useParams()   /////للتسهيل 
    const [categorie, setcategorie] = useState([]);
    const [CatEnSizes, setCatEnSizes] = useState([]);
    const [subcategories, setsubcategories] = useState([]);

   // const navigate = useNavigate();

   const ref1 = useRef(null);
   const ref2 = useRef(null);
   const ref3 = useRef(null); 

    // const data = [inpValue1,inpValue2,value[0],value[1],ref1,ref2,ref3];

    const handleSubmit = (e) => {

        // <Child data={data}/>
        console.log(ref1.current.checked);//true
        // console.log(ref2.current.checked);//true
        // console.log(ref3.current.checked);//true

       // navigate('/route', {state: {}})
        }
    

     useEffect(() => {
        // Make a request for a user with a given ID               //`/${params.id}?`
        axios.get('http://localhost:3001/api/elabdfoods/Categorie/63a331d7b93b2dac09515f48')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setcategorie(response.data);
            })
            .catch(function (err) {
                // handle error
                console.log(err.message);
            })
            .finally(function () {
                // always executed
            });
        axios.get('http://localhost:3001/api/elabdfoods/Categorie/63a331d7b93b2dac09515f48')
            .then(function (response) {
                // handle success
                console.log(response.data.CatEnSize);
                setCatEnSizes(response.data.CatEnSize);
            })
            .catch(function (err) {
                // handle error
                console.log(err.message);
            })
            .finally(function () {
                // always executed
            });
        axios.get('http://localhost:3001/api/elabdfoods/Categorie/63a331d7b93b2dac09515f48')
            .then(function (response) {
                // handle success
                console.log(response.data.SubCategorieID);
                setsubcategories(response.data.SubCategorieID);
            })
            .catch(function (err) {
                // handle error
                console.log(err.message);
            })
            .finally(function () {
                // always executed
            });
    }, []);

    return (<>

            <aside className="filtering-sidebar container" controller="List" style={{ width: "300px" }}>
                <div className="filtering__widget">
                    <div data-toggle="collapse" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text"
                        aria-expanded={open1} href="#catCollapse" role="button" className="filtering__widget-title mb-3 d-flex justify-content-between collapsed">
                        <h5>Categories</h5>
                        <i >{AiOutlineDown}</i>
                    </div>
                    <Collapse in={open1}>
                        <div className="filtering__panel" id="example-collapse-text">
                            <div className="form-group mb-3">
                                <input type="text" placeholder="search" className="form-control" value={inpValue1} onChange={(e) => setInpValue1(e.target.value)}/>
                            </div>
                            <div className="filtering-sidebar-scroll">
                                <div className="form-group custom-control custom-checkbox">
                                    <div className="sub-list pl-2">
                                        <div className="form-group custom-control custom-checkbox">
                                            <input type="checkbox" id="chkChildCat30 " ref={ref1} checked={checked} onChange={handleChange} className="custom-control-input"/>
                                            <label htmlFor="chkChildCat30" className="custom-control-label" key={categorie._id}>{categorie.CatEnName}</label>
                                        </div>
                                        {subcategories.map((subcategorie, index) => {
                                            return (
                                                <div className="form-group custom-control custom-checkbox" onChange={handleChange1} style={{ marginLeft: "10px" }}>
                                                    <input type="checkbox" id="chkChildCat33" ref={ref2} checked={checked1} className="custom-control-input"/>
                                                    <label htmlFor="chkChildCat33" className="custom-control-label " key={subcategorie._id}>{subcategorie.SubCat.EnsubCatName}</label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                    <button type="button" className="clear__filter" value="Reset Form" onClick={() => resetForm1()}>Clear</button>
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
                                <input type="text" placeholder="Search" className="form-control" value={inpValue2} onChange={(e) => setInpValue2(e.target.value)} />
                            </div>
                            <div className="filtering-sidebar-scroll">
                                {CatEnSizes.map((CatEnSize, index) => {
                                    return (
                                        <div className="form-group custom-control custom-checkbox" key={index}>
                                            <input type="checkbox" id="chkSize130" ref={ref3} className="custom-control-input" checked={checked4} onChange={handleChange4} />
                                            <label htmlFor="chkSize130" className="custom-control-label">{CatEnSize}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Collapse>
                    <button type="button" className="clear__filter" value="Reset Form" onClick={() => resetForm2()}>Clear</button>
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
                            <div style={{ margin: 'auto', display: 'block', width: "100%" }}>
                                <Typography id="range-slider" gutterBottom style={{ color: "white" }}></Typography>
                                <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />
                                <div fragment="1eeb0e19fa" className="slider-result">
                                    <span id="minrangeSliderResult">{value[0]} EGP</span> -
                                    <span id="maxrangeSliderResult"> {value[1]} EGP</span>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className="d-flex justify-content-between pt-2">
                    <button type="button" className="btn btn-dark" value="Reset Form" onClick={() => resetForm3()}>Reset</button>
                    <button type='submit' className="btn btn-dark" value="Submit" onClick={() => handleSubmit()}>Filter Now</button>
                </div>                                       
            </aside>

    </>
    )
}

export default Sidebar;
