interface Builder {
    buildWalls: () => void
    buildDoors: () => void
    buildWindows: () => void
}

class ConcreteBuilder implements Builder {
    private house: House

    constructor() {
        this.reset()
    }

    reset() {
        this.house =  new House()
    }

    buildDoors() {
        this.house.parts.push("Doors")
    }

    buildWalls() {
        this.house.parts.push("Walls")
    }

    buildWindows() {
        this.house.parts.push("Windows")
    }

    getHouse() {
        const result = this.house
        this.reset()
        return result
    }
}

class House {
    parts: string[] = []

    public listParts() {
        console.log(`House parts: ${this.parts.join(', ')}\n`)
    }
}

class Director {
    private builder: Builder

    public setBuilder(builder: Builder) {
        this.builder = builder
    }

    public buildMVP() {
        this.builder.buildDoors()
    }

    public buildFullHouse() {
        this.builder.buildDoors()
        this.builder.buildWalls()
        this.builder.buildWindows()
    }
}