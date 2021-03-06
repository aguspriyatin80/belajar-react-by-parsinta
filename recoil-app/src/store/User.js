import axios from 'axios'
import { selector } from 'recoil'

const User = selector({
    key: 'auth-user',
    get: async () => {
        let user = null
        try {
            let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            user = { user: data }
        } catch (e) {
            user = { user: e.message }
        }
        return user;
    }


})
export { User }