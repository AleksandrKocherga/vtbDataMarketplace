import React from 'react';
import { useQuery, gql } from '@apollo/client';
import GetDataset from './GetDataset';

const DATASETS = gql`
  {
    search(input: { type: DATASET, query: "*", start: 0, count: 10 }) {
      start
      count
      total
      searchResults {
        entity {
          urn
          type
        }
      }
    }
  }
`;

const GetDatasets = () => {
  const { loading, error, data } = useQuery(DATASETS);
  if (loading) return <p></p>;
  if (error) return <p></p>;

  return (
    <>
      {data?.search?.searchResults?.map(({ entity }, i) => (
        <GetDataset key={i} urn={entity?.urn} />
      ))}
    </>
  );
};

export default GetDatasets;
