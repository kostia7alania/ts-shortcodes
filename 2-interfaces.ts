// interfaces - for  class , objects 
interface Rect {
    readonly id: string
    color?: string 
    size: {
        width: number
        height: number
    }
}
const rect1: Rect = {
    id: '123',
    size: {
        width: 13,
        height: 12,
    }
}
rect1.color = '#ccc'
rect1.id = 123 // readONLY!
const rect3 = {} as Rect
const rect4 = <Rect> {} // old
// ========
interface RectWithArea extends Rect {
    getArea: () => number 
}
const rect5: RectWithArea = {
    id: 123,
    size: {
        width: 1,
        height: 123,
    },
    getArea(): number {
        return this.size.width * 213
    }
}
// ====== КЛАССЫ! ! !!
interface IClock {
    time:Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}
// много динамических ключей
interface css {
    [key: string]: string
}

const css:css = {
    border: '13ps solid red'
}