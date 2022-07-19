const {gql, ApolloServer} = require("apollo-server")

const produtos = [
    {
        id:1,
        nome:'laptop',
        valor:12200.50
    },
    {
        id:2,
        nome:'notebook',
        valor:15000.55
    }
]
const usuarios = [  
    {
        id:1,
        nome:'Victor',
        salario: 12365.50,
        ativo: true,
        idade:32 
    },
    {
        id:2,
        nome:'João',
        salario: 15365.50,
        ativo: true,
        idade:35
    }
]

const typeDefs = gql`
type Products {
    id: ID
    nome: String
    valor: Float
}

type Users {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
}
type Query {

    usuarios: [Users]
    produtos: [Products]
    
}

`
const resolvers = {
    Query:{
       usuarios() {
        return usuarios
       },
       produtos() {
        return produtos
       }
    
    }
}

const server = new ApolloServer({
    typeDefs,resolvers
    
})

server.listen()