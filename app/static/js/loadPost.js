// PEGAR POST
let params = (new URL(document.location)).searchParams;
let idPost = params.get('post');

const post = JSON.parse(`{
    "post": {
        "id": 1,
        "title": "Sobre o Blog",
        "date": "01/05/2022",
        "resume": "Olá, o meu nome é Rafael, sou estudante de libras e sou dono deste blog. A pouco tempo comecei a estudar libras para tentar perder um pouco a minha timidez e também para aprender alguma habilidade nova. Logo após a minha primeira aula fui procurar algum site que possuia algum dicionário ou até mesmo um roteiro de estudo sobre libras, mas acabei não encontrando nenhum que me agradasse. Na verdade achei bem pouco sobre como estudar libras. Existem até bastante imagens e vídeos sobre libras e seus sinais, mas nada é muito extenso ou explicativo e tudo é bem despadronizado, cada site ou video explica libras da sua maneira. O objetivo desse blog é ser um ponto central de consulta de conteúdo sobre libras, enquanto vou aprendendo irei criar novos posts sobre os conteúdos. Dessa forma irei ter um local organizado e fácil para tirar alguma dúvida sobre libras.",
        "content": [
            {
                "p": "Olá, o meu nome é Rafael, sou estudante de libras e sou dono deste blog."
            },
            {
                "p": "A pouco tempo comecei a estudar libras para tentar perder um pouco a minha timidez e também para aprender alguma habilidade nova. Logo após a minha primeira aula fui procurar algum site que possuia algum dicionário ou até mesmo um roteiro de estudo sobre libras, mas acabei não encontrando nenhum que me agradasse. Na verdade achei bem pouco sobre como estudar libras. Existem até bastante imagens e vídeos sobre libras e seus sinais, mas nada é muito extenso ou explicativo e tudo é bem despadronizado, cada site ou video explica libras da sua maneira."
            },
            {
                "p": "O objetivo desse blog é ser um ponto central de consulta de conteúdo sobre libras, enquanto vou aprendendo irei criar novos posts sobre os conteúdos. Dessa forma irei ter um local organizado e fácil para tirar alguma dúvida sobre libras."
            },
            {
                "p": "Irei também criar futuramente um dicionário de sinais e talvez algum conversor de palavras para sinais do alfabeto de libras."
            },
            {
                "p": "O blog é mais para o meu uso próprio, mas espero que você que esteja lendo isso também usufrue dele."
            },
            {
                "img": {
                    "name": "libras-sobre.jpg",
                    "height": "50%",
                    "width": "50%",
                    "alt": "imagem de sinal de libras",
                    "path": "static/img/libras-sobre.jpg"
                }
            }
        ],
        "references": [
            "https://www.librasol.com.br/wp-content/uploads/2018/04/interprete-de-libras-640x480.jpg"
        ]
    }
}`);

// BLOG POST
let blogPost = document.querySelector('#blog-post');
let postTitle = blogPost.querySelector('#post-title');
let postDate = blogPost.querySelector('#post-date');
let postContent = blogPost.querySelector('#post-content');
let postRefences = blogPost.querySelector('#post-references');

// SET DATA
postTitle.textContent = post.post.title;
postDate.textContent = post.post.date;

// CONTENT
post.post.content.forEach(element => {
    postContent.appendChild(createElement(element));
});

// REFERENCES
post.post.references.forEach(element => {
    postRefences.appendChild(createReferences(element));
});

////////////////////////////////////////////////////////////////

function createElement(element) {
    nameKey = Object.keys(element)[0];
    if(nameKey == "img") {
        return createIMGElement(element);
    }
    return createPElement(element);
}

function createPElement(content) {
    const newP = document.createElement('p');
    newP.classList.add('p-size-1');
    newP.textContent = content.p;

    return newP;
}

function createIMGElement(content) {
    const div = document.createElement('div');
    const newIMG = document.createElement('img');
   
    div.classList.add('text-center');
    div.classList.add('margin-ub-1');
    newIMG.setAttribute('src', content.img.path);
    newIMG.setAttribute('height', content.img.height);
    newIMG.setAttribute('width', content.img.width);
    newIMG.setAttribute('alt', content.img.alt);

    div.appendChild(newIMG);
    return div;
}

function createReferences(content) {
    const newLink = document.createElement('a');
    newLink.setAttribute('href', content);
    newLink.setAttribute('target', '_blank');
    newLink.textContent = content;

    return newLink;
}


