import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import AppHeader from './components/Header/index';
import Login from './components/Login/index';
import List from './itemPages/list';
import Details from './itemPages/details';
import Vip from './itemPages/vip';
const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minWidth: 1200, height: '100%' }}>
                    <Header className='header'>
                        <AppHeader />
                    </Header>
                    <Content className='content'>
                        <Login />
                        <Switch>
                            <Route path='/vip' component={Vip}/>
                            <Route path='/details/:id' component={Details}/>
                            <Route path='/:id?' component={List}/>
                        </Switch>
                    </Content>
                    <Footer className='footer'>@copyright ZJ 2020</Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));