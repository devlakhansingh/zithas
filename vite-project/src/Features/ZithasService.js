import axios from "axios"


const addtodo = async (formdata) => {
    const response = await axios.post("/api/user", formdata)
    return response.data
}

const fetchtodo = async () => {
    const response = await axios.get("/api/user")
    return response.data
}


const ZithasService = {
    addtodo,
    fetchtodo
}

export default ZithasService