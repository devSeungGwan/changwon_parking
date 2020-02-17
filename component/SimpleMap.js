import React from 'react';
import GoogleMapReact from "google-map-react"
import Room from "@material-ui/icons/Room"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    locate: {
        color: "green",
        // width: 300

    }
}));

export default function SimpleMap(){
    const classes = useStyles();
    
    const AnyReactComponent = ({text}) =>
        <div>
            <Room className={classes.locate}/>
            {text}
        </div>
    
    let defaultProps = {
        center: {
            lat: 35.25439900,
            lng: 128.60376200
        },
        zoom: 17
    }
    	
    return (
        <div style = {{height: '100vh', width: '600sp'}}>
            <GoogleMapReact
                bootstrapURLKeys= {{key:"AIzaSyB-bLfmufqobchzYAVWMJVapK6kSp9-dn0"}}
                defaultCenter= {defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={35.25439900}
                    lng={128.60376200}
                    text=""
                />
            </GoogleMapReact>
        </div>
    )
} 
