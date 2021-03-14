import { ApolloServer } from "apollo-server";

const server = new ApolloServer();

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => {
		console.log(`GraphQL running at ${url}`);
	});
