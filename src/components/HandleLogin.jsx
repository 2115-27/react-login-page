import React from "react";
// import { Octokit } from "octokit";

// const handleClick = async () => {
// 	  console.log("handleclick")
// 	  const octokit = new Octokit({
//   		auth: process.env.TOKEN,
// 	})
    
// await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
//   owner: 'Malavika1113',
//   repo: 'react-workflow-gh-actions',
//   workflow_id: 'Reuseable-A.yml',
//   ref: 'master'
    
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Data Ext Form
        </p>
        <form>
         <div className="input-container">
           <label>Release Version </label>
           <input type="text" name="uname" required />
         </div>
         <div className="input-container">
           <label>Model Type </label>
           <input type="text" name="pass" required />
         </div>
         <button onClick={handleClick}>BUILD</button>
        </form>
      </header>
    </div>
  );
};

export default Home;
