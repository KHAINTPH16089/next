import instance from "./instance";

export const add = (data: any) =>{
    return instance.post('/products', data)
}

export const getProduct = (id: any) =>{
    return instance.get(`/products/${id}`)
}

export const removeProduct = (id: any) =>{
    return instance.delete(`/products/${id}`)
}

export const updateProduct = (id: any, data: any) =>{
    return instance.put(`/products/${id}`, data)
}