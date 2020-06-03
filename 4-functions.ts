function add(a:number, b:number): number {
    return a+b
}

function test(str:string): string {
    return str.trim().toUpperCase()
}
interface MyPosition {
    x: number|undefined
    y: number|undefined
}
interface MyPositionWithDefault extends MyPosition {
    default: string
}

// перегрузка:
function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b:number): MyPosition
function position(a?: number, b?:number) {
    if(!a && !b) {
        return {a:undefined, y:undefined}
    }
    if (a&&!b) {
        return {x:a, y: undefined, default: a.toString()}
    }
    return {x:a, y:b}
}