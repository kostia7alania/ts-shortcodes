type Sex = boolean | number | bigint | symbol | null | undefined | object

function test (msg?: string|number): Sex {
    return 1
}

test(typeof Boolean)

let a:any = 13
a = 'asd'

interface test {
    a: number,
    b: {
        a?:number
    }
}


