# GraphQL (a Query Language with simple-to-define types, which generates documentation itself)
---



A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. It is, if one is to caricature, a great language for a dynamic JSON generation/edition/management system over a database.


Service
	A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.


Operation
	operation types: 
		- query,
		- mutation,
		- subscription
	NB: Query fields are executed in parallel, mutation fields run in series (this allows fast reads, and clean writes).

	"Operation name" is a meaningful and explicit name for your operation (like a good function name). It is only required in multi-operation documents, but its use is encouraged because it is very helpful for debugging and server-side logging.


Query
	"query" keyword for GET/read operations that are named.
	Unnamed strings between curly braces correspond to anonymous query operations over data fields.
	Arguments can be used to hone-in on specific queries.

	Named query:
		query HeroNameAndFriends {
		  hero {
		    name
		    friends {
		      name
		    }
		  }
		}

	Anonymous query:
		{
		  hero {
		    name
		    # Queries can have comments!
		    friends {
		      name
		    }
		  }
		}

	Query over field with an argument:
		{
		  human(id: "1000") {
		    name
		    height
		  }
		}


Mutation
	"mutation" keyword for POST/write operations.

		mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
		  createReview(episode: $ep, review: $review) {
		    stars
		    commentary
		  }
		}

		#variables
		{
		  "ep": "JEDI",
		  "review": {
		    "stars": 5,
		    "commentary": "This is a great movie!"
		  }
		}


Variables
	In most applications, the arguments to fields will be dynamic, rather than a query string (which is messy and costly). This allows better parsing through data dictionaries.

	How to use variables:
		Replace the static value in the query with $variableName
		Declare $variableName as one of the variables accepted by the query
		Pass variableName: value in the separate, transport-specific (usually JSON) variables dictionary

	Variable definition:
		basic syntax is
			($variableName: VariableType, $varName2: VarType2)	#for declaring that variables are needed
			{"variablename": variable_value}					#in a separate part of the code, for instantiation
		this works just like the argument definitions for a function in a typed language. All declared variables must be either scalars, enums, or input object types. For more info, notably on syntax, see GraphQL Schema language page. https://graphql.org/learn/schema/

		Default values, required values:
			- default value with ($variableName: VariableType = default_value)
			- required value with "!" added right after VariableType (for lists, myField: [String!] means that the list itself can be null, but it can't have any null members, while [String]! must have at least one item, but that the item may be the 'null' element/pointer)



Types

The "type" keyword is used to define a type. 
Scalar types (defined in the standard):
	-ID
	-String #utf-8
	-Int
	-Float
	-Boolean
In most GraphQL service implementations, there is also a way to specify custom scalar types: the "scalar" keyword. Then it's up to your implementation to define how that type should be serialized, deserialized, and validated.
Enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. They are declared with the "scalar" keyword.

type Character { 			#GraphQL Object Type, meaning it's a type with some fields
  name: String!				#field1, of type String
  appearsIn: [Episode!]!	#field2, of type Array of Episodes
}

Types are grossly put data trees.
	- We start with a special "root" object (of "Root" or "Query" type, the fundamental entry point), called "data" generally
    - We select a first-rank field "field1" on that
    - For the object returned by "field1", we select the subfields "sf1" and "sf2"

    Example:
    	Query:
    		{
			  field1 {
			    sf1
			    sf2
			  }
			}

		Return:
			{
			  "data": {
			    "field1": {
			      "sf1": "SF1_VALUE3",
			      "sf2": [
			        "SF2_VALUE1",
			        "SF2_VALUE4",
			        "SF2_VALUE6"
			      ]
			    }
			  }
			}


Interfaces
	An interface is an abstract data type that contains a list of field to be implemented for anything inheriting from that interface.
		interface InterfaceName {
			common_field1 : TypeA!
			common_field2 : TypeB
		}

		type SubInterfaceType implements InterfaceName {
			common_field1 : TypeA!
			common_field2 : TypeB
			particular_field1 : TypeC! 
		}

	Implementing a query over an interface requires the use of inline fragments. Meta fileds (__typename) are also useful.

Union types
	Union types are very similar to interfaces, but they don't get to specify any common fields between the types.
		union UnionTypeName = UnionCaseType1 | UnionCaseType2 | UnionCaseType3
	Implementing a query over a union also requires the use of inline fragments. Meta fileds (__typename) are also useful.

Schemas
	Schemas are a way to elaborate a common type system for GraphQL while staying language-agnostic.
	Within the schema, Query and Mutation are particular types.


Fragments
	"fragment" is akeyword used to construct a set of queries that can be reused. Useful when a series of queries can be complex. Fragments can be nested, but are invalid if they are self-referential/recursive.
		{
		  fragment_use1: hero(episode: EMPIRE) {
		    ...commonFragment
		  }
		  fragment_use2: hero(episode: JEDI) {
		    ...commonFragment
		  }
		}
		
		fragment commonFragment on QueriedDataType {
		  field_1
		  field_2
		  field_3 {
		    field_3a
		  }
		}

	NB: Variables in fragments: It is possible for fragments to access variables declared in the query or mutation.

		query NamedQueryWithArgs($arg1 : ArgType = default_val) {
			{
			  fragment_use1: hero(episode: EMPIRE) {
			    ...commonFragment
			  }
			  fragment_use2: hero(episode: JEDI) {
			    ...commonFragment
			  }
			}
		}
		
		fragment commonFragment on QueriedDataType {
		  field_1
		  field_2_needs_arg(arg1 : $arg1)
		  field_3 {
		    field_3a
		  }
		}

	Inline fragments: If you are querying a field that returns an interface or a union type, you will need to use inline fragments to access data on the underlying concrete type.

		query NamedQueryWithArgs($arg1 : ArgType = default_val) {
			{
			  field_1
			  ... on InterfaceType1 {
			    field2_of_interfacetype1
			  }
			  ... on InterfaceType2 {
			    field2_of_interfacetype2
			  }
			}
		}


Meta fields

	Given that there are some situations where you don't know what type you'll get back from the GraphQL service, you need some way to determine how to handle that data on the client. GraphQL allows you to request __typename, a meta field, at any point in a query to get the name of the object type at that point.


Directives 
	A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires. The core GraphQL specification includes exactly two directives:
		fieldName @include(if: Boolean)
			Only include this field in the result if the argument is true.
		fieldName @skip(if: Boolean)
			Skip this field if the argument is true.


Aliases
	Since the result object fields match the name of the field in the query but don't include arguments, you can't directly query for the same field with different arguments. Aliases let you rename the result of a field to anything you want and avoid such conflicts.

		{
		  alias1: super_field_name(arg1: ARG_VALUE_1) {
		    desired_query_subfield_name
		  }
		  alias2: super_field_name(arg1: ARG_VALUE_2) {
		    desired_query_subfield_name
		  }
		}


Object Input Types:
	In the GraphQL schema language, input types look exactly the same as regular object types, but with the keyword 'input' instead of 'type' (which corresponds to 'output' objects, which are the default I guess). They allow passing of complex objects as arguments - they are especially useful to handle mutations.


Validation
	GraphQL can be statically analyzed for query correctness.


Execution
	After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON. GraphQL cannot execute a query without a type system.
	Queries are typically executed through a background function called the resolver (one for each field). Many GraphQL libraries will let you omit resolvers and will just assume that if a resolver isn't provided for a field, that a property of the same name should be read and returned - you can however provide a custom resolver for a complex query.

	A resolver function receives four arguments:
    - 'obj' The previous object, which for a field on the root Query type is often not used.
    - 'args' The arguments provided to the field in the GraphQL query.
    - 'context' A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database.
    - 'info' A value which holds field-specific information relevant to the current query as well as the schema details.

    See JS "Promises"


Introspection
	The introspection system allows the programmer to ask the GraphQL schema what queries it supports.
	We designed the type system, so we know what types are available, but if we didn't, we can ask GraphQL, by querying the '__schema' field, always available on the root type of a Query.

	__Schema, __Type, __TypeKind, __Field, __InputValue, __EnumValue, __Directive - These all are preceded with a double underscore, indicating that they are part of the introspection system.



---


GraphQL with React: using Apollo

https://www.apollographql.com/docs/react/data/queries/

https://graphqlmastery.com/blog/react-hooks-in-apollo-client-for-graphql-queries-and-mutations

https://www.howtographql.com/react-apollo/6-more-mutations-and-updating-the-store/

