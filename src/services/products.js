import environment from "../environments/index";
import axios from "axios";

class ProductsServices {
    url = environment.URL_API + '/products'
    config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    async createProduct(body) {
        const uri = this.url + '/createProducts'
        const res = await axios.post(uri, body, this.config)
        return res
    }
    async getProduct() {
        const res = await axios.get(this.url + '/getProductsAll')
        return res
    }
    async getProductId(id) {
        const res = await axios.get(this.url + '/getProductsId/' + id)
        return res
    }
    async getProductCategory(name) {
        const res = await axios.get(this.url + '/getCategory/' + name)
        return res
    }
    async updateProduct(id) {
        const res = await axios.put(this.url + 'updateProducts/' + id)
        return res
    }
    async deleteProduct(id){
        const res = await axios.delete(this.url+'deleteProducts/'+`${id}`)
        return res
    }
}

export default new ProductsServices