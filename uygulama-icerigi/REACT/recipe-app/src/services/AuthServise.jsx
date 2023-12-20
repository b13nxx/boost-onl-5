// {
//     "email": "john@mail.com",
//     "password": "changeme"
//   }

import axios from "axios";

const AuthService = {
    login: async(email,password) => {
        const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
            "email": email,
            "password": password
        })
        if(response.data.access_token){
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    },

    logout: () => {
        localStorage.removeItem("user")
    }
}



export default AuthService;
// // This is a mock authentication service.

// const AuthService = {

//     isAuthenticated: false,

//     login(username, password){
//         // In a real app, you'd have API calls here.
//         // This is just a mockup, so we'll simulate async behavior with a promise
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if(username === 'admin' && password === 'password'){
//                     this.isAuthenticated = true
//                     resolve()
//                 } else {
//                     reject()
//                 }
//             }, 2000);
//         })
//     },

//     logout(){
//         this.isAuthenticated = false
//     }
// }

// export default AuthService;
