import React, {Component, Fragment} from 'react';
import img from './timg.jpg';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'; 
import './style.css';
import axios from 'axios';
// const { SubMenu } = Menu;


class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json').then((res) => {
            this.setState({
                list: res.data.data
            })
        })
    }

    getMenu() {
        return this.state.list.map((item) => {
            return (
                <Menu.Item key={item.id}>
                    <Link to={`/${item.id}`}>
                        <Icon type={item.icon} />
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }
    
    render() {
        return (
            <Fragment>
            <Link to='/'>
                <img className='header-img' src={img} alt='标题图片'/>
            </Link>   
                <Menu className='header-menu' mode="horizontal">
                    {this.getMenu()}
                </Menu>
            </Fragment>
        )
    }
}

export default AppHeader;