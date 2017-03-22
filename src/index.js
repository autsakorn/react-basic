import React from 'react';
import ReactDOM from 'react-dom';
import App from './projectplan/App';
import './index.css';


var formData = new FormData();
formData.append('token','e50b57a63b0527a3dac3015dd3b29c4e');
formData.append('email','autsakorn.t@firstlogic.co.th');
var urlInfo = "http://vspace.in.th/apis/v1/user/header";
var urlProjectDetail = "http://vspace.in.th/apis/v1/projectplan/projectdetail";
var urlListCaseAll = "http://vspace.in.th/apis/v1/casetype/listCaseAll";

get(urlInfo, formData).then(function(resInfo){
  formData.append('project_sid',250);
  get(urlProjectDetail, formData).then(function(resPd){
    get(urlListCaseAll, formData).then(function(resLCA){
      ReactDOM.render(
          <App info={resInfo.data} projectInfo={resPd.project_detail.project_detail} casetype={resPd.data} listType={resLCA.data}/>, document.getElementById('root')
      );
    });
  });
},function(error){
  console.log(error);
});

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
