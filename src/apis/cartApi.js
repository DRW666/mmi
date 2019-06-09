import api from "../commons/api"
import {URL} from "../commons/url"


export default  {

    /**
     * 根据用户的编号获取购物
     */
    getCartByUserId(URL,cb){
      api.get(URL,cb)
    }
}
