// TYPE GUARD

interface IComment {
    date: Date;
    message: string;
}

interface IDataService {
    getData(): unknown
}

let service: IDataService = {
    getData: () => "Dorin"
};

const response = service.getData()

const isComment = (type: any): type is IComment => (<IComment>type).message !== undefined

if(typeof response === "string") {
    console.log(response.padStart(3, "*"))
} else if(isComment(response)) {
    console.log(response.message)
}


// FLATTENING 

const numbers = [1,2]
const someObject = {
    id: 10,
    name: "Jonathan"
}
const someBoolean = true

type Flatten<T> = T extends any[] ? T[number] : T extends object ? T[keyof T] : T

type NumArrayFlattened = Flatten<typeof numbers> // number
type ObjFlattened = Flatten<typeof someObject> // string | number
type BoolFlattened = Flatten<typeof someBoolean> // literal true

// TYPE INFERING 

const generateId = (id: number) => id + "seed"

type MockReturnType<T> = T extends (...args: any[]) => infer R ? R : any

type Id = MockReturnType<typeof generateId>

const lookupEntity = (id: Id) => {
    // query DB for entity by ID
}

// or powerful in promises

type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any
const arr = [Promise.resolve(true)]

type ExpectedBoolean = UnpackPromise<typeof arr>


