interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'
let key: PersonKeys = 'name'
key = 123

type User = {
    id: number,
    name: string,
    createdAt: Date
}
type UserKeysNoMeta1 = Exclude<keyof User,'_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name'|'email'> // name | email

let ul: UserKeysNoMeta1 = 'name'
ul = 123 // err!

