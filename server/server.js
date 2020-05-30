const { ApolloServer } = require('apollo-server');

const typeDefs = `

    type Item {
        id: Int
        type: String
        description: String
    }

    type Query {
        items (type: string): [Item]
    }

`;

const items = [
    {id: 1, type: 'prefix', description: 'Air'},
    {id: 2, type: 'prefix', description: 'Jet'},
    {id: 3, type: 'prefix', description: 'flight'},
    {id: 4, type: 'sufix', description: 'Hub'},
    {id: 5, type: 'sufix', description: 'Station'},
    {id: 6, type: 'sufix', description: 'Mart'},

]

const resolvers = {
    Query: {
        items(_, args) {
            return items.filter(item => item.type === args.type);
        },
       
    }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(5000, () => {
    console.log('run')
});