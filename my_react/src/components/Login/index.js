import React, {Component} from 'react';
import { Modal, Button, Input, message } from 'antd';
import { Link, withRouter } from 'react-router-dom'; 
import './style.css';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePwd = this.changePwd.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            login: '',
            modal: false,
            user: '',
            password: ''
        };
    }
    showModal() {
        this.setState({
            modal: true,
            user: '',
            password: ''
        })
    }
    logout() {
        axios.get('http://www.dell-lee.com/react/api/logout.json')
			.then(res => {
				const data = res.data.data.login;
				if (data) {
                    this.setState({ login: false })
                }
            })
            this.props.history.push('/');
    }
    handleCancel() {
        this.setState({
            modal: false
        })
    }
    handleOk() {
        const { user, password } = this.state;
		const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`;
		axios.get(url, {
            withCredentials: true
        }).then(res => {
			const login = res.data.data.login;
			if (login) {
                message.success('登陆成功');
                setTimeout(() => {
                    this.setState({
                        modal: false,
                        login: true
                    })
                }, 500)
			}else {
				message.error('登陆失败');
			}
		})
    }
    changeUser(e) {
        this.setState({
            user: e.target.value
        })
    }
    changePwd(e) {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        const { login } = this.state;
        return (
            <div className='login'>
                {
                    login?
                    <Button 
                        type="primary"
                        onClick = {this.logout}
                        >Quit</Button>:
                    <Button
                        type="primary"
                        onClick={this.showModal}
                    >Login</Button>
                }
                <Modal
                    title="Login"
                    visible={this.state.modal}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input
                        className='nameInput' 
                        size="large" 
                        placeholder="username"
                        value={this.state.user}
                        onChange={this.changeUser}
                    />
                    <Input.Password 
                        size="large" 
                        placeholder="password" 
                        value={this.state.password}
                        onChange={this.changePwd}
                    />
                </Modal>
                <Link to={`/vip`}>
                    <Button
                        type="primary"
                        className='vipButton'
                    >Vip</Button>
                </Link>
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json',{
            withCredentials: true
        })
            .then(res => {
                this.setState({
                    login: res.data.data.login
                })
            })
    }
}

export default withRouter(Login);

