import environment from "../environments/index";
import axios from "axios";

class UserServices{
    url = environment.URL_API+'/users'
    config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    async createUser(body){
        const uri = this.url + '/register';
        const res = await axios.post(uri,body,this.config);

        return res
    }
    
    async userAuth(body){
        const uri = this.url+'/login'
        const res = await axios.post(uri,body,this.config)

        return res
    }

}

export default new UserServices