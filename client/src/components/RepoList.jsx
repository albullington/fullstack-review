import React from 'react';


const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos}
  </div>
)

export default RepoList;