const arrayOfNumbers: Array<number> = [1,2,3,]
const arrayOfStrings: Array<string> = ['ads']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfStrings)
reverse(arrayOfNumbers)