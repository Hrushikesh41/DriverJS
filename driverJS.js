import {driver} from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver();

driverObj.highlight({
    element : "Element 1",
    popover : {
        title : "Title 1",
        description : "Description"
    }
})