import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';

import { NavLink as RouterLink } from 'react-router-dom';
import { History } from '../Helpers/History';

function ListItemNavLink(props) {
    const { icon, primary, to } = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
          <RouterLink to={to} {...itemProps} innerRef={ref} />
        )),
      [to],
    );
  
    return (
        <ListItem button component={renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
    );
}

ListItemNavLink.propTypes = {
    icon: PropTypes.node.isRequired,
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

const red = {
    color: 'red'
}

class SidemenuItems extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    logout = event => {
        console.log('Logout!');
        let con = window.confirm('Apakah Anda yakin untuk keluar dari aplikasi ini?');
        if(con) {
            alert('Anda telah keluar dari aplikasi');
            History.push('/login');
        }
    }

    render() {
        return (
            <div>
                <ListItemNavLink to='/dashboard' primary='Dashboard' icon={<DashboardIcon />} />
                <ListItemNavLink to='/advertiser' primary='Advertiser' icon={<AssignmentIcon />} />
            
                <ListItem style={red} button onClick={(e) => {this.logout()}}>
                    <ListItemIcon style={red}>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Keluar" />
                </ListItem>
            </div>
        )
    }
}


export default SidemenuItems;