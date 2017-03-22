import React from 'react';
import ReactDOM from 'react-dom';
import Url from './config/url';
import InfoGen from './config/InfoGen';
import ProjectPlanApp from './projectplan/App';
import Project from './project/Project';
import Welcome from './login/Welcome';
import './index.css';

var formData = new FormData();

if(InfoGen.token){
  formData.append('token',InfoGen.token);
  formData.append('email',InfoGen.email);
  get(Url.urlInfo, formData).then(function(resInfo){
    if(localStorage.getItem("project_sid")){
      formData.append('project_sid',250);
      get(Url.urlProjectDetail, formData).then(function(resPd){
        get(Url.urlListCaseAll, formData).then(function(resLCA){
          ReactDOM.render(
              <ProjectPlanApp info={resInfo.data} projectInfo={resPd.project_detail.project_detail} casetype={resPd.data} listType={resLCA.data}/>, document.getElementById('root')
          );
        });
      });
    }else{
      ReactDOM.render(<Project info={resInfo.data} />, document.getElementById('root'));
    }
  },function(error){
    console.log(error);
  });
}else{
  ReactDOM.render(
    <Welcome />, document.getElementById('root')
  );
}

function get(url, formData){
  return new Promise(function(resolve, reject){
      fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
        method: "POST",
        body: formData
      })
      .then(function(response) {
        if(response.status===200){
            return response.text();
        }else{
            reject(Error(""));
        }
      })
      .then(function(text){
        resolve(JSON.parse(text));
      })
      .catch(function(error) {
          console.log('Request failed', error)
      })
  });
}
