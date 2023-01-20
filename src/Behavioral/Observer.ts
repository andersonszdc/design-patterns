class Publisher {
    subscribers: Subscriber[]

    constructor() {
        this.subscribers = []
    }

    addSubscriber(subscriber: Subscriber) {
        this.subscribers.push(subscriber)
    }

    removeSubscriber(subscriber: Subscriber) {
        const index = this.subscribers.findIndex((item) => item === subscriber)
        this.subscribers.splice(index, 1)
    }

    notifySubscribers(eventType: string, data: any) {
        for (const subscriber of this.subscribers) {
            if (subscriber.eventType === eventType) {
                subscriber.execute(data)
            }
        }
    }
}

interface Subscriber {
    eventType: string
    execute(data: any): void
}