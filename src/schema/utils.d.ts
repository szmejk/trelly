type Flavoring<FlavorT> = {
    _type?: FlavorT
}

type Flavor<T, FlavorT> = T & Flavoring<FlavorT>
