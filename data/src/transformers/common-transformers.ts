export class CommonTransformers {

    static mapToObject<K, V>(map: Map<K, V>): Record<string, V> {
        /**
         * The `fromEntries` is only available in ES2019 and beyond. Use another method
         * if an older target JS version is needed.
         */
        return Object.fromEntries(map.entries());
    }

}
