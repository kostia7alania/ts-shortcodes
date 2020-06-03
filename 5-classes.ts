class Ts {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        return name + ':' + this.version
    }
}
// ==== 

// создадим класс: 
class Car {
    readonly model: string
    readonly numberOfWheels: number = 4
    constructor (theModel: string) {
        this.model = theModel
    }
}
// то же самое!!!!!!
class Car {
    readonly numberOfWheels: number = 4
    constructor (readonly model: string) {    }
}
/// ====
class Animal {
    protected voice:string = ''
    public color: string = 'black'
    provate go() {// ток в этом классе юзать можно, не в экстенженных
        console.log('go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.voice // PROTECTED .!.
cat.setVoice('asd')
cat.go()

// в абстрактных классах = описание методов, которые надо реализовать в классе!
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void { }
    info(): string {
        return 'asd'
    }
}