import gql from 'graphql-tag';

export default gql `
query songQuery($id: ID!){
  song(id: $id){
    title
    lyrics {
      content
      id
    }
  }  
}`;