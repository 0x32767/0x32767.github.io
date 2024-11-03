function make_repo_card(name, lang, stars, description) {
    let repos_container = document.getElementById("repos-container");

    let repo = document.createElement("div");
    repo.className = "repo";

    let name_element = document.createElement("h3");
    name_element.innerText = name;
    repo.appendChild(name_element);

    let description_element = document.createElement("p");
    description_element.className = "description";
    description_element.innerText = description;
    repo.appendChild(description_element);

    let lang_element = document.createElement("p");
    lang_element.className = "lang";
    lang_element.innerText = `Language: ${lang}`;
    repo.appendChild(lang_element);

    let star_label = document.createElement("p");
    star_label.className = "star_label";
    star_label.innerText = "Stars:"
    repo.appendChild(star_label);

    let star_container = document.createElement("div")
    for (let i=0; i<stars.toString().length; i++) {
        let star = document.createElement("img");
        star.src = `imgs/${stars.toString()[i]}.gif`;
        star_container.appendChild(star);
    }
    repo.appendChild(star_container);

    repo.onclick = ((e) => {
        alert("Please star my repos.\nYou can also see that the star number increases on the here too.\n(may need to wait a bit for github to update star count)");
        location.href = "https://github.com/0x32767/"+name
    });

    repos_container.appendChild(repo);
}


fetch("https://api.github.com/users/0x32767/repos").then(res => res.json()).then((json) => {
    json.forEach(repo => {
        if (!repo.fork) {
            let name = repo.name;
            let lang = repo.language;
            let stars = repo.stargazers_count;
            let description	 = repo.description;

            make_repo_card(name, lang, stars, description)
        }
    });
});
