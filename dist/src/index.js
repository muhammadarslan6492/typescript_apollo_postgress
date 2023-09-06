"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const boot = () => {
    const server = new apollo_server_1.ApolloServer({ schema: schema_1.schema });
    server
        .listen(500)
        .then(({ url }) => {
        console.log(`server running on ${url}`);
    })
        .catch((err) => {
        console.log(err.message);
    });
};
boot();
//# sourceMappingURL=index.js.map