import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

function Home() {
  const {loading, data} = useQuery(FETCH_POST_QUERY)


  if(data) console.log(data.getPosts)

  return (
    <div>
      <h1 className="">Home Page</h1>
    </div>
  );
}

export default Home;

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likes {
        username
      }
    }
  }
`