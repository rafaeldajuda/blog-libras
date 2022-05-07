const post = JSON.parse(`[{
    "post": {
        "id": 1,
        "title": "Sobre o Blog",
        "date": "01/05/2022",
        "resume": "Olá, o meu nome é Rafael, sou estudante de libras e sou dono deste blog. A pouco tempo comecei a estudar libras para tentar perder um pouco a minha timidez e também para aprender alguma habilidade nova. Logo após a minha primeira aula fui procurar algum site que possuia algum dicionário ou até mesmo um roteiro de estudo sobre libras, mas acabei não encontrando nenhum que me agradasse. Na verdade achei bem pouco sobre como estudar libras. Existem até bastante imagens e vídeos sobre libras e seus sinais, mas nada é muito extenso ou explicativo e tudo é bem despadronizado, cada site ou video explica libras da sua maneira."
    }
}]`);

let homeBlogPost = document.querySelector('#home-blog-post');

// POSTS
createPosts(homeBlogPost, post);

function createPosts(homeBlogPost, posts) {
    posts.forEach(element => {
        id = element.post.id;
        title = element.post.title;
        date = element.post.date;
        resume = element.post.resume;
        homeBlogPost.appendChild(itemPost(id, title, date, resume));
    });
}

function itemPost(id, title, date, resume) {
    let borderDiv = createBorderDiv();
    let containerDiv = createContainerDiv();

    let rowDivHead = createRowDiv();
    let titleDiv = createTitleDiv();
    let pTitle = createPTitle();
    let linkPost = createLinkPost(id, title);
    let dateDiv = createDateDiv();
    let pDate = createPDate(date);

    let rowContentDiv = createRowDiv();
    let contentDiv = createContentDiv();
    let pContent = createPContent(resume);
    
    ///////////////////////////////////////////////////////////

    borderDiv.appendChild(containerDiv);
    containerDiv.appendChild(rowDivHead);
    containerDiv.appendChild(rowContentDiv);

    rowDivHead.appendChild(titleDiv);
    titleDiv.appendChild(pTitle);
    pTitle.appendChild(linkPost);
    rowDivHead.appendChild(dateDiv);
    dateDiv.appendChild(pDate);

    rowContentDiv.appendChild(contentDiv);
    contentDiv.appendChild(pContent);



    return borderDiv;
}

function createBorderDiv() {
    let borderDiv = document.createElement('div');
    borderDiv.classList.add('border-r-2');
    borderDiv.classList.add('border');
    borderDiv.classList.add('border-1');
    borderDiv.classList.add('border-dark');
    borderDiv.classList.add('margin-b-1');
    borderDiv.classList.add('yellow-1');

    return borderDiv;
}

function createContainerDiv() {
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    containerDiv.classList.add('padding-lr-2');
    containerDiv.classList.add('padding-ub-1');

    return containerDiv;
}

function createRowDiv() {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.classList.add('justify-content-start');

    return rowDiv;
}

function createTitleDiv() {
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('col-8');
    titleDiv.classList.add('div-title-menu-post');

    return titleDiv;
}

function createPTitle() {
    let p = document.createElement('p');
    p.classList.add("p-size-2");
    p.classList.add("p-title-menu-post");

    return p;
}

function createLinkPost(id, title) {
    let link = document.createElement('a');
    link.textContent = title;
    link.href = "/posts?post=" + id;

    return link;
}

function createDateDiv() {
    let dateDiv = document.createElement('div');
    dateDiv.classList.add('col-4');
    dateDiv.classList.add('div-date-menu-post');
    dateDiv.classList.add('right-text');

    return dateDiv;
}

function createPDate(date) {
    let p = document.createElement('p');
    p.classList.add("p-size-2");
    p.classList.add("p-date-menu-post");
    p.textContent = date;

    return p;
}

function createContentDiv() {
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('col-12');

    return contentDiv;
}

function createPContent(resume) {
    let p = document.createElement('p');
    p.classList.add("p-size-1");
    p.classList.add("p-content-menu-post");
    p.textContent += resume;

    return p;
}

//  DIV border-r-2 border border-1 border-dark margin-b-1 yellow-1
//      DIV container padding-lr-2 padding-ub-1
//          DIV row justify-content-start
//              DIV col-8 div-title-menu-post
//                  P p-size-2 p-title-menu-post
//                      A href="/posts?post=id
//              DIV col-4 div-date-menu-post right-text
//                  P p-size-2 p-date-menu-post
//          DIV row justify-content-start
//              DIV col-12
//                  P p-size-1 p-content-menu-post






