const {gql, ApolloServer} = require("apollo-server")

const db = [
    {
        id:1,
        nome:'Victor',
        email:'victor@gmail.com',
        telefone:"31 1234 5678",
    },
    {
        id:2,
        nome:'Agda',
        email:'agda@gmail.com',
        telefone:"71 1245 4878",
    },
]
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
type Db {
id: ID
nome: String
email: String
telefone: String

}

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
    usuario(id:Int, nome:String): Users
    produto(id:Int, nome:String): Products
    db:Db
    
}

`
const resolvers = {
    Query:{
        db(){
            return db
        },
       usuarios() {
        return usuarios
       },
       usuario(_, args) {
        const {id,nome} = args
        if(id)
        return usuarios.find((usuario) => usuario.id === args.id)
        return usuarios.find((usuario) => usuario.nome === args.nome)
       },
       produtos() {
        return produtos
       },
       produto(_, args) {
        const {id,nome} = args
        if(id)
        return produtos.find((produto) => produto.id === args.id)
        return produtos.find((produto) => produto.nome === args.nome)
       }
    
    }
}

const server = new ApolloServer({
    typeDefs,resolvers
    
})

server.listen()