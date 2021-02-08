
(function(){
    let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.send();
xhr.onload = response;
function response() {
    let responseArr = this.response;
    let list = document.querySelector('.list');
    responseArr.forEach(element => {
        let item = document.createElement('button');
        item.innerText = element.name;
        item.addEventListener('click', () => {
            let infoItem = document.querySelector('.info');
            infoItem.innerText = '';
            for(let key in element) {
                if(key === 'company' || key === 'id') {
                    continue;
                } else if(key === 'address') {
                    infoItem.innerText += `${key}: ${element[key].city}, ${element[key].street}\n`
                } else {
                    infoItem.innerText += `${key}: ${element[key]}\n`;
                } 
            }

            let infoButton = document.createElement('button');
            let posts = document.createElement('div');
            posts.className = 'userPosts';
            infoButton.innerText = 'Show posts';
            infoButton.addEventListener('click', () => {
                console.log(element.id);
                let postRequest = new XMLHttpRequest();
                postRequest.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${element.id}`);
                postRequest.responseType = 'json';
                postRequest.send();
                postRequest.onload = function () {
                    let postsArr = postRequest.response;
                    postsArr.forEach(item => {
                        let post = document.createElement('div');
                        post.className = 'post'
                        posts.append(post);
                        let postTitle = document.createElement('h1');
                        postTitle.innerText = item.title;
                        let postBody = document.createElement('div');
                        postBody.innerText = item.body;
                        post.append(postTitle);
                        post.append(postBody);

                    })
                }
            })
            infoItem.append(infoButton);
            infoItem.append(posts);

        })
        list.appendChild(item);
    });
    list.style.visibility = 'visible';
    document.querySelector('.loading-bar').style.display = 'none';
    
}
  })()

