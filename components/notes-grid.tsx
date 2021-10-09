import React from 'react'
import { Row, Col, Card } from 'antd'
import type { NoteSerializable } from '../models/note'

interface NotesGridProps {
    notes: Array<NoteSerializable>
}

const NotesGrid = ({ notes }: NotesGridProps) => {
    const cards = notes.map((note, index: number) => {
        return (
            <Col span={8} key={index}>
                <Card title={note.date} bordered={false}>
                    <p>{note.content}</p>
                </Card>
            </Col>
        )
    })

    return (
        <Row gutter={[16, 16]}>
            {cards}
        </Row>
    )
}

export default NotesGrid
