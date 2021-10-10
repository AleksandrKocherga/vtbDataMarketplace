import React from 'react';
import { useDispatch } from 'react-redux';
import { useQuery, gql } from '@apollo/client';
import { addDataset } from './redux/actions';

const getDatasetQuery = (urn) => gql`
  {
    dataset(
      urn: "${urn}"
    ) {
      name
      status {
        removed
      }
      tags {
        tags {
          tag {
            name
          }
        }
      }
      description
      schema {
        name
        fields {
          fieldPath
        }
      }
    }
  }
`;

const GetDataset = ({ urn }) => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(getDatasetQuery(urn));

  if (loading) return <p></p>;
  if (error) return <p></p>;

  if (data) {
    dispatch(addDataset(data));
  }
  return <div></div>;
};

export default GetDataset;
