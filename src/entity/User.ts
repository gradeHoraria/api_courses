import { GrantTypes } from "@keycloak/keycloak-admin-client/lib/utils/auth";

export default class User{
    constructor(public username: string,
        public password: string, 
        public clientId: string, 
        public grantType: GrantTypes){}
}