fetch("/components/consultant/data/index.json")
  .then((response) => response.json())
  .then((data) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const detailUserEl = document.querySelector("#detail_user");
    const listRelatedEl = document.querySelector("#list_relative");

    data.forEach((user) => {
      if ((user?.id == id) & (user?.tab === "PROJECT")) {
        showDetailUser(detailUserEl, user);
      }
    });

    showListRelated(listRelatedEl, data);

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

function showListRelated(el, data) {
  el.innerHTML = "";
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `
      <a href="consultant.html?id=${data[i].id}" class="consultant-content__item" style="color: inherit;">
          <div>
              <figure><img src="${data[i].image}" alt="${data[i].name1}"></figure>
          </div>
          <p class="name">${data[i].name2}</p>
      </a>
    `;
  }
  el.innerHTML = html;
}
