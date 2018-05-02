import React, { Component } from 'react'
import { Row, Col } from 'antd'

class TopNav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    _setLogin () {
        if(this.props.isLogin) {
            return <a href="/logout">退出</a>
        } else {
            return <a href="/login">登录</a>
        }
    }

    render() {
        return (
            <Row className="topNav">
                <Col span={3}>logo</Col>
                <Col span={15}>导航栏目</Col>
                <Col span={2}>购物车</Col>
                <Col span={4}>
                    {this._setLogin()}
                    &nbsp;/&nbsp;
                    <a href="/register">注册</a>
                </Col>
            </Row>
        )
    }
}

export default TopNav