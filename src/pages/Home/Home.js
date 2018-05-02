import React from 'react'
import { hot } from 'react-hot-loader'
import DynamicImport from '@modules/DynamicImport'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'
import { Button } from 'antd'
import DB from '@DB'
import '../base.css'
import './Home.scss'

// 异步加载页面的方式：
const AsyncPage = DynamicImport(() =>
	import(/* webpackChunkName: "AsyncPage" */ '@pages/AsyncPage'),
)

class Home extends React.Component {
	componentDidMount() {
		// 请求实例
		// DB.Test.sendRequest({
		// }).then(res => {
		//
		// })
	}
	render() {
		return (
			<HashRouter>
				<div>
					<Route 
						path="/"
						exact
						render={() => <Redirect to={`/zhuye`} />} 
					/>
					<Route path="/zhuye" component={AsyncPage} />
				</div>
			</HashRouter>
		)
	}
}

export default hot(module)(Home)
