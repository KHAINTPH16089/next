import instance from "./instance";

export const add = (data: any) =>{
    return instance.post('/products', data)
}

export const remove = (id: any) =>{
    return instance.post(`/products/${id}`)
}