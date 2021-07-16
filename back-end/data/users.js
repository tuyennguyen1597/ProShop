import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admine@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jade Nguyen',
        email: 'jade@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Tuyen Nguyen',
        email: 'tuyen@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users