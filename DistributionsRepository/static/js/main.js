'use strict';

// OnFirstLoad
loadMain();

let nav_main = document.querySelector('#nav_main');
nav_main.addEventListener('click', nav_main_clickHandler);

function nav_main_clickHandler( event ){
    event.preventDefault();
    
    loadMain();

    window.history.pushState({route: ''}, "Going to the main page", full_path);
}

document.body.querySelectorAll('.usual')
    .forEach( link => link.addEventListener('click', link_clickHandler, true) );

function link_clickHandler( event ){
    event.preventDefault(); 

    let path = decodeURI(this.href);

    fetch(path).then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            let main = document.querySelector('main');
            main.innerHTML = "";

            let section = document.createElement('section');
            section.id = 'files';
            main.appendChild(section);
            
            let h3 = document.createElement('h3');
            h3.className = 'font_18_21';
            h3.id = 'path';

            let a = document.createElement('a');
            a.className = 'usual';
            a.id = 'current';
            a.href = full_path + path.split('/')[4];
            a.innerHTML = path.split('/')[4];
            h3.appendChild(a);

            for(let i = 5; path.split('/')[i] != undefined; i++)
            {
                a.id = '';

                if(h3.innerHTML != '')
                {
                    let img = document.createElement('img');
                    img.className = 'arrow';
                    img.src = statics_url + "img/arrow.svg";
                    img.alt = "Стрелочка";
                    h3.appendChild(img);
                }

                a = document.createElement('a');
                a.className = 'usual';
                a.id = 'current';
                let relative_path = path.split('/')[4];
                for(let l = 5; l < i + 1; l++)
                {
                    relative_path += '/' + path.split('/')[l];
                }
                a.href = full_path + relative_path;
                a.innerHTML += path.split('/')[i];
                h3.appendChild(a);
            }
            section.appendChild(h3);

            for(var key in data)
            {
                let a = document.createElement('a');
                a.className = "folder usual";
                a.href = full_path + key;
                section.appendChild(a);

                let img = document.createElement('img');
                img.src = statics_url + "img/folder.svg";
                img.alt = "Каталог";
                a.appendChild(img);

                let span = document.createElement('span');
                span.className = "number";
                span.innerHTML = "450";
                a.appendChild(span);

                span = document.createElement('span')
                span.className = "font_22_26";
                span.innerHTML = key.split('/').pop();
                a.appendChild(span);

                span = document.createElement('span')
                span.className = "font_11_13 date";
                span.innerHTML = "Последнее изменение: " + data[key];
                a.appendChild(span);
            }
            document.body.querySelectorAll('.usual')
            .forEach( link => link.addEventListener('click', link_clickHandler, true) );
        }
    );

    window.history.pushState({route: path}, "Moving to the subcatalog", path);
}

window.addEventListener('popstate', window_popStateHandler);

// Functions
function loadMain() {
    fetch('load main').then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            let main = document.querySelector('main');
            main.innerHTML = '';

            let section = document.createElement('section');
            section.id = 'main_favourites';
            main.appendChild(section);

            let h3 = document.createElement('h3');
            h3.className = 'font_18_21';
            h3.innerHTML = 'Избранное';
            section.appendChild(h3);

            let div = document.createElement('div');
            div.id = 'view_all';
            section.appendChild(div);

            let a = document.createElement('a');
            a.className = 'font_14_16';
            a.href = '#';
            a.innerHTML = 'Смотреть все';
            div.appendChild(a);

            a = document.createElement('a');
            a.className = "folder favourite";
            a.href = "#";
            section.appendChild(a);

            let img = document.createElement('img');
            img.src = statics_url + "img/folder.svg";
            img.alt = "Каталог";
            a.appendChild(img);

            let span = document.createElement('span');
            span.className = "number";
            span.innerHTML = "450";
            a.appendChild(span);

            span = document.createElement('span');
            span.className = 'font_11_13';
            span.innerHTML = 'Синергет / CSS / 4.5.5 /';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_22_26";
            span.innerHTML = '4.5.5505050';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_11_13 date";
            span.innerHTML = 'Последнее изменение: 07.09.2021 12:20';
            a.appendChild(span);

            a = document.createElement('a');
            a.className = "folder favourite";
            a.href = "#";
            section.appendChild(a);

            img = document.createElement('img');
            img.src = statics_url + "img/folder.svg";
            img.alt = "Каталог";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "number";
            span.innerHTML = "450";
            a.appendChild(span);

            span = document.createElement('span');
            span.className = 'font_11_13';
            span.innerHTML = 'Синергет /';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_22_26";
            span.innerHTML = 'CSS';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_11_13 date";
            span.innerHTML = 'Последнее изменение: 07.09.2021 12:20';
            a.appendChild(span);

            a = document.createElement('a');
            a.className = "folder favourite";
            a.href = "#";
            section.appendChild(a);

            img = document.createElement('img');
            img.src = statics_url + "img/folder.svg";
            img.alt = "Каталог";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "number";
            span.innerHTML = "450";
            a.appendChild(span);

            span = document.createElement('span');
            span.className = 'font_11_13';
            span.innerHTML = 'Синергет / CSS / 4.5.5 /';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_22_26";
            span.innerHTML = '4.5.5505050';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_11_13 date";
            span.innerHTML = 'Последнее изменение: 07.09.2021 12:20';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'like';
            img.src = statics_url + "img/like.svg";
            img.alt = "Понравилось";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "like";
            span.innerHTML = '15';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'dislike';
            img.src = statics_url + "img/dislike.svg";
            img.alt = "Не понравилось";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "dislike";
            span.innerHTML = '1';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'downloads';
            img.src = statics_url + "img/downloads.svg";
            img.alt = "Загрузки";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "downloads";
            span.innerHTML = '47';
            a.appendChild(span);

            a = document.createElement('a');
            a.className = "folder favourite";
            a.href = "#";
            section.appendChild(a);

            img = document.createElement('img');
            img.src = statics_url + "img/folder.svg";
            img.alt = "Каталог";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "number";
            span.innerHTML = "450";
            a.appendChild(span);

            span = document.createElement('span');
            span.className = 'font_11_13';
            span.innerHTML = 'Синергет / CSS / 4.5.5 /';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_22_26";
            span.innerHTML = '4.5.5505050';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_11_13 date";
            span.innerHTML = 'Последнее изменение: 07.09.2021 12:20';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'like';
            img.src = statics_url + "img/like.svg";
            img.alt = "Понравилось";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "like";
            span.innerHTML = '15';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'dislike';
            img.src = statics_url + "img/dislike.svg";
            img.alt = "Не понравилось";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "dislike";
            span.innerHTML = '1';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'downloads';
            img.src = statics_url + "img/downloads.svg";
            img.alt = "Загрузки";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "downloads";
            span.innerHTML = '47';
            a.appendChild(span);

            a = document.createElement('a');
            a.className = "folder";
            a.href = "#";
            section.appendChild(a);

            img = document.createElement('img');
            img.src = statics_url + "img/folder.svg";
            img.alt = "Каталог";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "number";
            span.innerHTML = "450";
            a.appendChild(span);

            span = document.createElement('span');
            span.className = 'font_11_13';
            span.innerHTML = 'Синергет / CSS / 4.5.5 /';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_22_26";
            span.innerHTML = '4.5.5505050';
            a.appendChild(span);

            span = document.createElement('span');
            span.className = "font_11_13 date";
            span.innerHTML = 'Последнее изменение: 07.09.2021 12:20';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'like';
            img.src = statics_url + "img/like.svg";
            img.alt = "Понравилось";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "like";
            span.innerHTML = '15';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'dislike';
            img.src = statics_url + "img/dislike.svg";
            img.alt = "Не понравилось";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "dislike";
            span.innerHTML = '1';
            a.appendChild(span);

            img = document.createElement('img');
            img.className = 'downloads';
            img.src = statics_url + "img/downloads.svg";
            img.alt = "Загрузки";
            a.appendChild(img);

            span = document.createElement('span');
            span.className = "downloads";
            span.innerHTML = '47';
            a.appendChild(span);

            section = document.createElement('section');
            section.id = 'files';
            main.appendChild(section);

            h3 = document.createElement('h3');
            h3.className = 'font_18_21';
            h3.innerHTML = 'Файлы';
            section.appendChild(h3);

            for(var key in data)
            {
                let a = document.createElement('a');
                a.className = "folder usual";
                a.href = full_path + key;
                section.appendChild(a);

                let img = document.createElement('img');
                img.src = statics_url + "img/folder.svg";
                img.alt = "Каталог";
                a.appendChild(img);

                let span = document.createElement('span');
                span.className = "number";
                span.innerHTML = "450";
                a.appendChild(span);

                span = document.createElement('span')
                span.className = "font_22_26";
                span.innerHTML = key.split('/').pop();
                a.appendChild(span);

                span = document.createElement('span')
                span.className = "font_11_13 date";
                span.innerHTML = "Последнее изменение: " + data[key];
                a.appendChild(span);

                document.body.querySelectorAll('.usual')
                .forEach( link => link.addEventListener('click', link_clickHandler, true) );
            }
        }
    )
}

function window_popStateHandler( event ){
    if(event.state){
        console.log(event.state)
    }

    console.log(event);
}