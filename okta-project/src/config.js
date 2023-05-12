const { CLIENT_ID, ISSUER } = {CLIENT_ID :'0oa7v0bmkvqE2mjzF5d7', ISSUER :'https://dev-96776781.okta.com/oauth2/default'}

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    // redirectUri: window.location.origin + '/login/callback',
    redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid', 'profile', 'email','app-role' ]
  },
  resourceServer: {
    messagesUrl: 'http://127.0.0.1:8000/introspect'
  }
}
