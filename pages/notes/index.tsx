import React from 'react'
import { Layout, Menu, Breadcrumb, Typography, Badge } from 'antd'
import { GetServerSideProps } from 'next'
import NotesGrid from '../../components/notes-grid'
import dbConnect from '../../lib/dbConnect'
import NoteModel from '../../models/note'
import type { NoteSerializable } from '../../models/note'

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography


interface NotesPageProps {
    notes: Array<NoteSerializable>
}


const NotesPage = ({ notes }: NotesPageProps) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    await dbConnect()

    const result = await NoteModel.find({})
    const notes = result.map((doc) => {
        const note = doc.toObject()

        note._id = note._id.toString()
        note.date = note.date.toISOString()

        return note
    })

    return { props: { notes: notes } }
}

export default NotesPage
