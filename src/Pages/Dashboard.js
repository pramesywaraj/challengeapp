import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Box from '@material-ui/core/Box';

import GoogleMaps from '../Components/GoogleMaps';
import Chart from 'react-google-charts';


function TabPanel(props) {
    const { children, value, index, classes, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Paper className={classes} p={2}>
            {children}
        </Paper>
      </Typography>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },

    paper: {
        padding: theme.spacing(3, 2),
    }
});

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e, newValue) {
        this.setState({ value: newValue });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
                        <Tab label="Drivers Location Map" {...a11yProps(0)} />
                        <Tab label="Reporting" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel classes={classes.paper} value={value} index={0}>
                    <GoogleMaps />
                </TabPanel>
                <TabPanel classes={classes.paper} value={value} index={1}>
                    <Chart
                        width={'auto'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Driver', 'Hours per Day'],
                            ['Maman', 11],
                            ['Abdul', 2],
                            ['Endang', 2],
                            ['Asep', 2],
                            ['Urip', 7],
                        ]}
                        options={{
                            title: 'Drivers Summary per Day',
                            is3D: true,
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                    <Chart
                        width={'auto'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Driver', 'Gain per Day (Rp)'],
                            ['Maman', 11000],
                            ['Abdul', 2000],
                            ['Endang', 2000],
                            ['Asep', 2000],
                            ['Urip', 7000],
                        ]}
                        options={{
                            title: 'Drivers Gain per Day',
                            is3D: true,
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </TabPanel>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);
