import fetchMock from "fetch-mock";

const shouldUseMock = ():boolean=>{
    return process.env.USE_MOCK === 'true' || process.env.NODE_ENV === 'test'
}
const enableMock = () =>{
    if(shouldUseMock()){
        fetchMock.config.fallbackToNetwork = true
        //TODO colocar aqui todas as funcoes de mock
    }
}

const disableMock = ()=>{
    fetchMock.reset()
}

export {enableMock, disableMock, shouldUseMock}