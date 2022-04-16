import "./Function.css";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BodyNearest from "./layout/bodyNearest"
import BodyPast from "./layout/bodyPast"
import BodyUpcoming from "./layout/bodyUpcoming"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Function(props) {
    const currentLocation = useLocation().pathname;
    // console.log(currentLocation);
    const [filterState, setFilterState] = useState(false);
    const handleFilter = () => {
        // console.log("Filter is clicked");
        setFilterState(!filterState)
    }

    const closest = (arr, num) => {
        return arr.reduce((acc, val) => {
            if (Math.abs(val - num) < Math.abs(acc)) {
                return val - num;
            } else {
                return acc;
            }
        }, Infinity) + num;
    }

    const [selectedState, setSelectedState] = useState("State");
    const [selectedCity, setSelectedCity] = useState("City");
    const [nearest, setNearest] = useState(null);
    const [upcoming, setUpcoming] = useState(null);
    const [past, setPast] = useState(null);
    var nearest1 = [];
    var past1 = [];
    var upcoming1 = [];
    var allArr;
    var temp = [];
    var stCode = props.userData.station_code;
    var rData = props.userData;
    var rData = props.rideData;
    const fil = () => {
        if (selectedState === "State" && selectedCity !== "City") {
            var allArr = rData.filter((item) => {
                return item.city === selectedCity
            });
            var upArr = allArr.filter((item) => {
                return (item.date - new Date()) > 0;
            });
            var pastArr = allArr.filter((item) => {
                return (item.date) - new Date() < 0;
            });
            past1 = pastArr;
            upcoming1 = upArr;
            // setPast(pastArr);
            // setUpcoming(upArr);
            // console.log(Date);
            console.log(rData, past1, upcoming1);
        }
        else if (selectedState !== "State" && selectedCity === "City") {
            var allArr1 = rData.filter((item) => {
                return item.state === selectedCity
            });
            var upArr1 = allArr1.filter((item) => {
                return new Date(item.date) - new Date() > 0;
            });
            var pastArr1 = allArr1.filter((item) => {
                return new Date(item.date) - new Date() < 0;
            });
            // setPast(pastArr1);
            // setUpcoming(upArr1);
            // console.log(pastArr1, upArr1);
        }
        else if (selectedState != "State" && selectedCity != "City") {
            var allArr2 = rData
            allArr2.filter((item) => {
                return item.city === selectedCity
            });
            allArr2.filter((item) => {
                return item.state === selectedState
            })
            var upArr2 = allArr2
            upArr2.filter((item) => {
                return (new Date(item.date) - new Date() > 0);
            });
            var pastArr2 = allArr2
            pastArr2.filter((item) => {
                return (new Date(item.date) - new Date() < 0);
            });
            // console.log(allArr2, upArr2, pastArr2)
            // useEffect((prev)=)
            // setPast(allArr2);
            // setUpcoming(upArr2);
            // console.log(past, upcoming);
        }
        else {
            var upArr3 = rData.filter((item) => {
                return new Date(item.date) - new Date() > 0;
            });
            var pastArr3 = rData.filter((item) => {
                return new Date(item.date) - new Date() < 0;
            });
            setPast(pastArr3);
            setUpcoming(upArr3);
        }
    }


    const linkStyle = {
        textDecoration: "none",
        color: "#fff"
    }
    const activeLinkStyle = {
        textDecorationLine: "underline",
        color: "#fff",
        textUnderlineOffset: "6px",
        textDecorationThickness: "2px"
    }
    const handleLinkStyle = (a) => {
        if (currentLocation === a) {
            return activeLinkStyle
        } else {
            return linkStyle
        }
    }
    const handleNearest = () => {
        // console.log("Nearest Ride is CLicked");
    }
    const handleUpcoming = () => {
        // console.log("Upcoming Ride is Clicked");
    }
    const handlePast = () => {
        // console.log("Past ride is clicked");
    }
    const handleState = (e) => {
        // console.log("Selected state is " + e.target.value)
        setSelectedState(e.target.value);
        // setNearest([]);
        // setPast([]);
        // setUpcoming([]);
        fil();
        // arrange(selectedCity, selectedState);
        // handleFilter();
    }
    const handleCity = (e) => {
        console.log("Selected city is " + e.target.value)
        // setSelectedCity(e.target.value);
        // setNearest([]);
        // setPast([]);
        // setUpcoming([]);
        fil();
        // arrange(selectedCity, selectedState);
        // handleFilter();
    }
    return (
        <>
            <div className="filters-navbar" >
                <div className="filters-container">
                    <div className="filters-left">
                        <Link to='/' className="filter-link" style={handleLinkStyle('/')} >
                            <div className="filters-item" onClick={handleNearest}>
                                Nearest rides
                            </div>
                        </Link>
                        <Link to='/upcoming-rides' className="filter-link" style={handleLinkStyle('/up')}>
                            <div className="filters-item" onClick={handleUpcoming}>
                                Upcoming rides
                            </div>
                        </Link>
                        <Link to='/past-rides' className="filter-link" style={handleLinkStyle('/past-rides')}>
                            <div className="filters-item" onClick={handlePast}>
                                Past rides
                            </div>
                        </Link>
                    </div>

                    <div className="filters-right" onClick={handleFilter}>
                        <div className="filters-item right" ><i className="fas fa-filter"></i> Filter</div>
                    </div>
                </div>
            </div >
            <div className="filter-popup" style={filterState ? { display: "block" } : { display: "none" }}>
                <div className="title">
                    Filters
                </div>
                <div className="title-bar" />
                <li className="nav-item dropdown">
                    <a className=" state nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false" >
                        {selectedState}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {props.rideData.map((singleState, ind) => {
                            return <li key={ind}><option className="dropdown-item" onClick={handleState}>{singleState.state}</option></li>
                        })}
                    </ul>

                    <a className=" city nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {selectedCity}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {props.rideData.map((singleCity, index) => {
                            return <li key={index}><option className="dropdown-item" onClick={handleCity}> {singleCity.city}</option></li>
                        })}
                    </ul>
                </li>
                <li className="nav-item dropdown">
                </li>
            </div >
            <Router>
                <Switch>
                    <Route exact path="/">
                        <BodyNearest key="/nearest" closest={closest} stCode={stCode} nearestArray={rData} />
                    </Route>
                    <Route path="/upcoming-rides">
                        <BodyUpcoming key="/upcoming" closest={closest} stCode={stCode} upComingArray={rData.slice(16, 25)} />
                    </Route>
                    <Route path="/past-rides">
                        <BodyPast key="/past" closest={closest} stCode={stCode} pastRidesArray={rData.slice(1, 40)} />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Function