import React from 'react'
import { Layout, Menu, Breadcrumb, Typography, Badge } from 'antd'
import NotesGrid from '../../components/notes-grid'

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography

interface Note {
    date: string
    content: string
}

const notes: Array<Note> = [
    {
        date: '2021-10-02',
        content: '# Test Note'
    },
    {
        date: '2021-10-03',
        content: '# Test Note 2'
    },
    {
        date: '2021-10-04',
        content: '# Test Note 3'
    },
    {
        date: '2021-10-05',
        content: '# Test Note 4'
    },
]


class Notes extends React.Component {
    render() {
        return (
            <>
                <Header className='site-layout-background' style={{ padding: 8 }} >
                    <Title>Notes</Title>
                </Header>

                <Content style={{ margin: '16px' }}>
                    <NotesGrid notes={notes} />
                </Content>
            </>
        )
    }
}

export default Notes
