fetch("/components/consultant/data/index.json")
  .then((response) => response.json())
  .then((data) => {
    // get params
    const urlParams = new URLSearchParams(window.location.search);
    const id = String(urlParams.get("id"));
    const tab = String(urlParams.get("tab"));

    const detailUserEl = document.querySelector("#detail_user"); // detail user element
    const listRelatedEl = document.querySelector("#list_relative"); // list related element
    const tabName = document.getElementById("tab_name"); // tab name element
    const linkListEl = document.querySelectorAll(
      ".consultant-list__link--project"
    ); // link list element

    // SHOW LINK LIST
    showActiveLink(linkListEl, tab);

    // SHOW DETAIL USER
    const getUserById = (users, id) =>
      users.find((user) => user?.id.toString() == id);
    const getUserByTab = (users, tab) =>
      users.find((user) => user?.tab?.toLowerCase() == tab);

    const user =
      id && id != "null"
        ? getUserById(data, id)
        : tab && tab != "null"
        ? getUserByTab(data, tab)
        : data[0];

    showDetailUser(detailUserEl, user);

    // SHOW LIST RELATED

    if (tab && tab != "null") {
      if (tab.toLowerCase() == "cost") {
        tabName.innerText = "コストマネジメントサービス";
        return showListRelated(
          listRelatedEl,
          data.filter((user) => user?.tab?.toLowerCase() == "cost"),
          tab,
          id
        );
      }
      if (tab.toLowerCase() == "project") {
        tabName.innerText = "CTE戦略";
        return showListRelated(
          listRelatedEl,
          data.filter((user) => user?.tab?.toLowerCase() == "project"),
          tab,
          id
        );
      }
      if (tab.toLowerCase() == "maintain") {
        tabName.innerText = "メンテナンスサービス";
        return showListRelated(
          listRelatedEl,
          data.filter((user) => user?.tab?.toLowerCase() == "maintain"),
          tab,
          id
        );
      }
      if (tab.toLowerCase() == "project") {
        tabName.innerText = "プロジェクト";
        return showListRelated(
          listRelatedEl,
          data.filter((user) => user?.tab?.toLowerCase() == "project"),
          tab,
          id
        );
      }
    } else {
      tabName.innerText = "プロジェクト";
      return showListRelated(
        listRelatedEl,
        data.filter((user) => user?.tab?.toLowerCase() == "project"),
        tab,
        id
      );
    }

    detailUserEl;
  })
  .catch((err) => console.log(err));

function showDetailUser(el, user) {
  el.innerHTML = "";
  let html = "";
  html += `
    <div class="flex-box wrap">
        <figure><img src="${user.thumbnail}" alt="${user.thumbnail}"></figure>
        <div>
            <p class="name">
                ${user.name1}
                <span>${user.name2}</span>
            </p>
            <p class="category">${user.category}</p>
            <p class="comment">
              ${user.description}
            </p>
            <p>保有資格: ${user.reward}</p>
        </div>
    </div>
  `;

  el.innerHTML = html;
}

function showListRelated(el, data, tab = null, id = null) {
  console.log("tab", tab, id);
  el.innerHTML = "";
  let html = "";
  for (let i = 0; i < data.length; i++) {
    if (!id || id == "null") id = data[0].id;
    html += `
    <div class="consultant-content__item--wrap ${
      id == data[i].id.toString() ? "consultant-content__item--wrap-active" : ""
    }">
      <a href="consultant.html?id=${
        data[i].id
      }&tab=${tab}" class="consultant-content__item" style="color: inherit;">
          <figure><img src="${data[i].image}" alt="${data[i].name1}"></figure>
          <p class="name">${data[i].name2}</p>
      </a>
    </div>
    `;
  }
  el.innerHTML = html;
}

function showActiveLink(links, tab) {
  links.forEach((link) => {
    let tabName = link.getAttribute("data-set");

    link.addEventListener("click", () => {
      // Remove the active class from all links
      links.forEach((link) => {
        link.classList.remove("consultant-active");
      });

      if (tabName === tab) {
        link.classList.add("consultant-active");
      }
    });

    if (tab == "null" || !tab) {
      links[0].classList.add("consultant-active");
    }

    if (tabName === tab) {
      link.classList.add("consultant-active");
    }
  });
}
