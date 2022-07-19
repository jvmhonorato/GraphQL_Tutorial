const {gql, ApolloServer} = require("apollo-server")


const typeDefs = gql`
type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
    
}

`
const resolvers = {
    Query:{
        idade() {
            return 18
        },
        salario() {
            return 12345.45
        },
        nome() {
            return 'Victor'
        },
        ativo() {
            return true
        },
        id() {
            return 15464
        }
    
    }
}

const server = new ApolloServer({
    typeDefs,resolvers
    
})

server.listen()