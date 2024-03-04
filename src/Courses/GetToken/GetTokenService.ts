import  KeycloakAdminClient from "@keycloak/keycloak-admin-client"
import User from "../../entity/User"

export default class GetTokenService {
    
    async execute(user: User) {
        const keycloakAdminClient = new KeycloakAdminClient({
            baseUrl: 'http://keycloak:8080',
            realmName: 'gradeHoraria',
        })

        await keycloakAdminClient.auth({
            username: user.username,
            password: user.password,
            grantType: user.grantType,
            clientId: user.clientId,
        })

        return keycloakAdminClient.accessToken
    }
}
