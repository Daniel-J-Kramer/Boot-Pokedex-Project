

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalID: NodeJS.Timeout | undefined = undefined;
    #Interval: number;

    constructor(num: number) {
        this.#Interval = num;
        this.#startReapLoop();
    }

    add<T>(key: string, val: T) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val: val,
        });
    }

    get<T>(key: string) {
        if (this.#cache.has(key)) {
            return this.#cache.get(key)?.val;
        }
        return undefined;
    }

    #reap() {
        for (let cache of this.#cache) {
            if (cache[1].createdAt < (Date.now() - this.#Interval)) {
                this.#cache.delete(cache[0])
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalID = setInterval(this.#reap.bind(this), this.#Interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalID);
    }
}

type CacheEntry<T> = {
    createdAt: number,
    val: T,
};