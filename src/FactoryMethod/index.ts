abstract class Logistics {
    abstract createTransport(): Transport

    planDelivery() {
        const transport = this.createTransport()

        return "this product will be delivered by" + transport.delivery
    }

}

class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck()
    }
}

class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship()
    }
}

interface Transport {
    delivery: () => string
}

class Truck implements Transport {
    delivery() {
        return "truck"
    }
}

class Ship implements Transport {
    delivery() {
        return "ship"
    }
}

const roadLogistics = new RoadLogistics()
console.log(roadLogistics.planDelivery())

const seaLogistics = new SeaLogistics()
console.log(roadLogistics.planDelivery())