db.createUser({
    user: 'note_tasks',
    pwd: 'note_tasks',
    roles: [
        {
            role: 'readWrite',
            db: 'note_tasks',
        },
    ],
})
