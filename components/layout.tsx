import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout, Menu, Breadcrumb, Typography, Badge } from 'antd'
import { DesktopOutlined } from '@ant-design/icons';
import NextLink from 'next/link'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Title } = Typography


function useToggle(initialValue: boolean = false): [boolean, any] {
    const [value, setValue] = React.useState(initialValue)

    const toggle = React.useCallback(() => {
        setValue(v => !v)
    }, [])

    return [value, toggle]
}

interface LayoutProps {
    children: React.ReactNode
}

const AppLayout = ({ children }: LayoutProps) => {
    const [collapsed, toggleCollapsed] = useToggle(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
                <div className='logo' />

                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                    <Menu.Item key='1' icon={<DesktopOutlined />}>
                        <NextLink href='/'>Index</NextLink>
                    </Menu.Item>

                    <Menu.Item key='2' icon={<DesktopOutlined />}>
                        <NextLink href='/notes'>Notes</NextLink>
                    </Menu.Item>

                    <Menu.Item key='3' icon={<DesktopOutlined />}>
                        <NextLink href='/todo'>Todo</NextLink>
                    </Menu.Item>

                    <Menu.Item key='4' icon={<DesktopOutlined />}>
                        <NextLink href='/about'>About</NextLink>
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout className='site-layout'>
                {children}

                <Footer style={{ textAlign: 'center' }}>
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </Footer>
            </Layout>
        </Layout>
    )
}

export default AppLayout
