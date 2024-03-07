import environment from "../environments/index";
import axios from "axios";

class CategoriesServices {
    url = environment.URL_API + '/categorys'
    config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    async CreateCategories(body){
        const uri = this.url + '/createCategorys'
        const res = await axios.post(uri,body,this.config)
        // console.log(res+'hola asdsad');
        return res;
    }
    async DeleteCategories(id){
        const res = await axios.delete(this.url+'/deleteCategorys/'+`${id}`)
        return res;
    }
    async CategoriesAll(){
        const res =  await axios.get(this.url+'/getCategorys')
        return res;
    }
   
}

export default new CategoriesServices