interface FurnitureFactory {
    createChair(): Chair
    createSofa(): Sofa
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair()
    }

    createSofa(): Sofa {
        return new VictorianSofa()
    }
}

class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair()
    }

    createSofa(): Sofa {
        return new ModernSofa()
    }
}

interface Chair {
    hasLegs: () => boolean
    sitOn: () => string
}

class VictorianChair implements Chair {
    hasLegs () {
        return true
    }

    sitOn () {
        return "sitting on the victorian chair"
    }
}

class ModernChair implements Chair {
    hasLegs() {
        return true
    }

    sitOn () {
        return "sitting on the modern chair"
    }
}

interface Sofa {
    hasLegs: () => boolean
    sitOn: () => string
}

class VictorianSofa implements Sofa {
    hasLegs () {
        return false
    }

    sitOn () {
        return "sitting on the victorian sofa"
    }
}

class ModernSofa implements Sofa {
    hasLegs() {
        return false
    }

    sitOn () {
        return "sitting on the modern sofa"
    }
}