'use strict'

function requestUserData(inputReq, btnReq) {
    const activeReq = document.querySelector(btnReq);
    activeReq.addEventListener('click', function () {
      const userName = document.querySelector(inputReq).value;
      const url = `https://api.github.com/users/${userName}`;
      fetch(url)
        .then((data) => data.json())
        .then(function (response) {
          const nodeAside = document.querySelector('#asideGit');
          const nodeDiv = document.createElement('div');
          nodeDiv.setAttribute('id', 'reqWrapper');
          nodeAside.appendChild(nodeDiv);
          const nodeName = document.createElement('h3');
          nodeDiv.appendChild(nodeName);
          const nodeNameText = document.createTextNode(response.login);
          nodeName.appendChild(nodeNameText);
          const nodePic = document.createElement('img')
          nodePic.setAttribute('src', response.avatar_url);
          nodeDiv.appendChild(nodePic);
          console.log(response);
        });
    });
  }
  requestUserData('#inputReq', '#getReq');