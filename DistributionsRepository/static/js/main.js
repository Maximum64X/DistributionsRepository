'use strict';

// OnFirstLoad
if (internal == 'false') {
    getData.call({href: full_path});
}
else {
    loadMain();
}

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

    getData.call({href: this.href});
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
            main.id = null;
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

            for(let key in data)
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

function getData(){
    let path = decodeURI(this.href);
    
    if (internal == 'false') {
        full_path = full_path.split('/')[0] + '/' + full_path.split('/')[1] + '/' + full_path.split('/')[2] + '/' + full_path.split('/')[3] + '/'; // We must get "raw" full path for correct work with next iterations. Probably, it must be realised somehow different
        internal = 'true';
    }

    fetch(path + " /internal").then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            let main = document.querySelector('main');
            main.id = 'extended';
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

            if (path.split('/').length != 8) {
                // If catalog is a container for catalogs
                for(let key in data['children'])
                {
                    let a = document.createElement('a');
                    a.className = "folder usual";
                    a.href = full_path + data['current']['path'] + '/' + key;
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
                    let folder_name = key.split('/').pop();
                    span.title = folder_name;
                    if (folder_name.length > 16){
                        folder_name = folder_name.substring(0, 17) + "...";
                    }
                    span.innerHTML = folder_name
                    a.appendChild(span);
    
                    span = document.createElement('span')
                    span.className = "font_11_13 date";
                    span.innerHTML = "Последнее изменение: " + data['children'][key]['modification_time'];
                    a.appendChild(span);
                }
            }
            else {
                // If catalog is a container for files
                let table = document.createElement('table');
                table.className = 'font_14_16';
                table.cellPadding = '0px';
                table.cellSpacing = '0px';
                section.appendChild(table);

                let tr = document.createElement('tr');
                table.appendChild(tr);

                let th = document.createElement('th');
                th.className = "font_14_16 gray";
                th.innerHTML = 'Тип';
                tr.appendChild(th);

                th = document.createElement('th');
                th.className = "font_14_16 gray";
                th.innerHTML = 'Название';
                tr.appendChild(th);

                th = document.createElement('th');
                th.className = "font_14_16 gray";
                th.innerHTML = 'Последнее изменение';
                tr.appendChild(th);

                th = document.createElement('th');
                th.className = "font_14_16 gray";
                th.innerHTML = 'Скачивания';
                tr.appendChild(th);

                th = document.createElement('th');
                th.className = "font_14_16 gray";
                th.innerHTML = 'Версия';
                tr.appendChild(th);

                th = document.createElement('th');
                th.className = "font_14_16 gray";
                th.innerHTML = 'Рейтинг';
                tr.appendChild(th);

                for(let key in data['children']) {
                    tr = document.createElement('tr');
                    tr.addEventListener('click', fileSelect, true);
                    tr.style.cursor = 'pointer';
                    table.appendChild(tr);

                    let td = document.createElement('td');
                    td.className = 'extension';
                    tr.appendChild(td);

                    let img = document.createElement('img');
                    img.className = 'file';
                    img.src = statics_url + 'img/file.svg';
                    td.appendChild(img);

                    let span = document.createElement('span');
                    let file_name = key.split('/').pop();
                    span.innerHTML = file_name.substr(file_name.length - 3);
                    td.appendChild(span);

                    td = document.createElement('td');
                    td.innerHTML = file_name;
                    tr.appendChild(td);

                    td = document.createElement('td');
                    let modification_time = data['children'][key]['modification_time'];
                    td.innerHTML = modification_time.split(' ')[0] + '&ensp;&#160;' + modification_time.split(' ')[1];
                    tr.appendChild(td);

                    td = document.createElement('td');
                    td.innerHTML = '25';
                    tr.appendChild(td);

                    td = document.createElement('td');
                    td.innerHTML = 'Мажорная';
                    tr.appendChild(td);

                    td = document.createElement('td');
                    tr.appendChild(td);

                    img = document.createElement('img');
                    img.className = 'rating_like';
                    img.src = statics_url + 'img/like.svg';
                    td.appendChild(img);

                    span = document.createElement('span');
                    span.className = 'file_number';
                    span.innerHTML = '15';
                    td.appendChild(span);

                    img = document.createElement('img');
                    img.className = 'rating_dislike';
                    img.src = statics_url + 'img/dislike.svg';
                    td.appendChild(img);

                    span = document.createElement('span');
                    span.className = 'file_number';
                    span.innerHTML = '1';
                    td.appendChild(span);
                }
            }

            section.addEventListener('click', selectClear, true);

            createSidePanel(main, path, data);
            
            document.body.querySelectorAll('.usual')
            .forEach( link => link.addEventListener('click', link_clickHandler, true) );
        }
    );

    window.history.pushState({route: path}, "Moving to the subcatalog", path);
}

function fileSelect() {
    selectClear()

    this.id = 'selected';

    let img = this.querySelector('.file');
    img.src = statics_url + 'img/file_selected.svg';

    img = this.querySelector('.rating_like');
    img.src = statics_url + 'img/like_selected.svg';

    img = this.querySelector('.rating_dislike');
    img.src = statics_url + 'img/dislike_selected.svg';

    img = document.querySelector('#favourite');
    img.remove();
}

function selectClear() {
    let old_selected = document.querySelector('#selected');
    
    if(old_selected != null){
        old_selected.id = null;

        let img = old_selected.querySelector('.file');
        img.src = statics_url + 'img/file.svg';

        img = old_selected.querySelector('.rating_like');
        img.src = statics_url + 'img/like.svg';

        img = old_selected.querySelector('.rating_dislike');
        img.src = statics_url + 'img/dislike.svg';

        createSidePanel(main, path, data);
    }
}

function createSidePanel(main, path, data) {
    let section = document.createElement('section');
    section.id = 'additional';
    main.appendChild(section);

    let div = document.createElement('div');
    div.id = 'additional1';
    section.appendChild(div);

    let img = document.createElement('img');
    img.id = 'folder_blue';
    img.src = statics_url + 'img/folder_blue.svg';
    div.appendChild(img);

    img = document.createElement('img');
    img.id = 'favourite';
    img.src = statics_url + 'img/favourite_off.svg';
    div.appendChild(img);

    let span = document.createElement('span');
    span.className = 'font_22_26';
    let name = path.split('/')
    span.innerHTML = name[name.length - 1];
    div.appendChild(span);

    if(path.split('/').length > 5 & path.split('/').length < 8) {
        span = document.createElement('span');
        span.className = 'font_16_19';
        span.innerHTML = 'Последняя версия';
        div.appendChild(span);

        let a = document.createElement('a');
        a.href = '#';
        div.appendChild(a);

        span = document.createElement('span');
        span.className = 'font_16_19';
        span.innerHTML = '4.5.5.25291';
        a.appendChild(span);

        img = document.createElement('img');
        img.src = statics_url + 'img/link.svg';
        a.appendChild(img);

        span = document.createElement('span');
        span.className = 'font_11_13';
        span.innerHTML = '12.08.2021';
        div.appendChild(span);
    }

    div = document.createElement('div');
    div.id = 'additional2';
    section.appendChild(div);

    img = document.createElement('img');
    img.src = statics_url + 'img/info.svg';
    div.appendChild(img);

    span = document.createElement('span');
    span.className = 'font_11_13 gray';
    span.innerHTML = 'Сведения';
    div.appendChild(span); 

    span = document.createElement('span');
    span.className = 'font_16_19 gray';
    span.innerHTML = 'Дата изменения';
    div.appendChild(span);

    span = document.createElement('span');
    span.className = 'font_16_19';
    let modification_time = data['current']['modification_time'];
    span.innerHTML = modification_time.split(' ')[0] + '&ensp;&#160;' + modification_time.split(' ')[1];
    div.appendChild(span);

    span = document.createElement('span');
    span.className = 'font_16_19 gray';
    span.innerHTML = 'Размер';
    div.appendChild(span);

    span = document.createElement('span');
    span.className = 'font_16_19';
    let size = data['current']['size'];
    let tier = 2;
    let end = false;
    while(end == false){
        if(size < 1024){
            end = true;
            if(size % 1 > 0) {
                size = size.toFixed() + ',' + (size % 1).toString().split('.')[1][0];
            }
        }
        else {
            tier += 1;
            size /= 1024;
        }
    }
    let tier_str;
    switch (tier) {
        case 2:
            tier_str = 'Байт';
            break;
        case 3:
            tier_str = 'КБ';
            break;
        case 4:
            tier_str = 'МБ';
            break;
        case 5:
            tier_str = 'ГБ';
            break;
        case 6:
            tier_str = 'ТБ';
        default: // Must raise exception later
            tier_str = 'Не распознано!';
            break;
    }
    span.innerHTML = size + ' ' + tier_str;
    div.appendChild(span);

    if(path.split('/').length == 8) {
        span = document.createElement('span');
        span.className = 'font_16_19 gray';
        span.innerHTML = 'Кол-во скачиваний';
        div.appendChild(span);

        span = document.createElement('span');
        span.className = 'font_16_19';
        span.innerHTML = '23';
        div.appendChild(span);

        span = document.createElement('span');
        span.className = 'font_16_19 gray';
        span.innerHTML = 'Рейтинг';
        div.appendChild(span);

        let div_child = document.createElement('div');
        div_child.id = 'rating';
        div.appendChild(div_child);

        img = document.createElement('img');
        img.className = 'rating_like';
        img.src = statics_url + 'img/like.svg';
        div_child.appendChild(img);

        span = document.createElement('span');
        span.className = 'font_16_19';
        span.innerHTML += '70';
        div_child.appendChild(span);

        img = document.createElement('img');
        img.className = 'rating_dislike';
        img.src = statics_url + 'img/dislike.svg';
        div_child.appendChild(img);

        span = document.createElement('span');
        span.className = 'font_16_19';
        span.innerHTML += '3';
        div_child.appendChild(span);

        section = main.querySelector('#files');
        section.className = 'table';
    }
}

function window_popStateHandler( event ){
    if(event.state){
        console.log(event.state)
    }

    console.log(event);
}