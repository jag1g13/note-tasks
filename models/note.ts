import mongoose from 'mongoose'

export interface Note {
    date: Date
    content: string
}

export interface NoteSerializable {
    date: string
    content: string
}

const schema = new mongoose.Schema<Note>({
    date: { type: Date, required: true },
    content: { type: String, required: true },
})

export default mongoose.models.Note || mongoose.model<Note>('Note', schema)
