import { apiClient } from './ApiClient';
export const executeBasicAuthService
    = (token)=> apiClient.get(`/basicAuth`
    ,{
    headers: {
        Authorization: token
    }
}
)

export const executeJWTAuthService
    = (username,password)=> apiClient.post(`/authenticate`,
 {username,password}
)