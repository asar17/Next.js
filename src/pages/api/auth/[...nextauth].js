import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers:[
        GitHubProvider({
            clientId:'Iv1.d753521ee2fe8329',
            clientSecret:'3332a41ff5e88c0ea7b497292edfc2b5b41854cb'
        })
    ]
})