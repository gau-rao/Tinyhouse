<<<<<<< HEAD
import { gql } from "apollo-server-express";
export const typeDefs = gql`
type Listing {
    id : ID!
    title : String!
    image : String!
    address : String!
    price : Int!
    numOfGuests : Int!
    numOfBeds : Int!
    rating : Int!

    }
    type Query {
        listings : [Listing!]!
    }
    type Mutation {
        deleteListing(id : ID!) : Listing ! 
    }
    `; 
=======
import { gql } from "apollo-server-express";
export const typeDefs = gql`
type Listing {
    id : ID!
    title : String!
    image : String!
    address : String!
    price : Int!
    numOfGuests : Int!
    numOfBeds : Int!
    rating : Int!

    }
    type Query {
        listings : [Listing!]!
    }
    type Mutation {
        deleteListing(id : ID!) : Listing ! 
    }
    `; 
>>>>>>> e12acb5ea16ad9ec50cfdea64f8d240d3bc383b0
