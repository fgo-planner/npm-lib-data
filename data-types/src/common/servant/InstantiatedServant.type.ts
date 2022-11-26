export type InstantiatedServant = {

    /**
     * The identifier of this instance. This should be unique for each instantiated
     * servant in its respective data set.
     * 
     * For plan servants, this serves as the reference to a master servant instance.
     */
    instanceId: number;

};
