import React from 'react'
import { Row, Col, Card } from 'antd'

interface Note {
    date: string
    content: string
}

interface NotesGridProps {
    notes: Array<Note>
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
