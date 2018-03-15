import React from 'react'
import { Button, message, Form, Icon, Input, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import { signIn } from '../../utili'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    if (this.props.user) {
      this.props.history.push('/dashboard')
    }
  }
  componentDidUpdate = () => {
    if (this.props.user) {
      this.props.history.push('/dashboard')
    }
  }
  submit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        this.props.setLoading(true)
        const res = await signIn(values)
        if (res.status === 200) {
          const data = await res.json()
          this.props.setUser(data)
        } else if (res.status === 403) {
          message.error('用户名/手机号/密码错误！')
        } else if (res.status === 500) {
          message.warning('网络连接失败，请稍后再试')
        }
        this.props.setLoading(false)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.submit} style={{maxWidth: '300px', margin: '0 auto'}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名/手机号/邮箱' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名/手机号/电子邮箱' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </Form.Item>

        <Form.Item>
          <Link to='/forgot' style={{float: 'left'}}>忘记密码</Link>
          <Link to='/sign-up' style={{float: 'right'}}>立即注册</Link>

          <Button type='primary' style={{width: '100%'}} htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(SignIn)