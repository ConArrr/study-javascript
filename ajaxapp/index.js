console.log("index.js: loaded");

const main = () => {
  fetchUserInfo("js-primer-example")
}

const fetchUserInfo = (userId) => {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(reply => {
      console.log(reply.status)
  
      if (reply.ok) {
        return reply.json().then(userInfo => {
          // HTMLの組み立て
          const view = createView(userInfo);
          // HTMLの挿入
          displayView(view);
        })
      } else {
        console.error("エラーレスポンス: ", reply)
      }
  
    }).catch(err => {
      console.error(err)
    })
}

const createView = (userInfo) => {
  return escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
      <dt>Location</dt>
      <dd>${userInfo.location}</dd>
      <dt>Repositories</dt>
      <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

const displayView = (view) => {
  const result = document.getElementById("result");
  result.innerHTML = view;
}

const escapeSpecialChars = (str) => {
  return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

const escapeHTML = (strings, ...values) => {
  return strings.reduce((result, str, i) => {
      const value = values[i - 1];
      if (typeof value === "string") {
          return result + escapeSpecialChars(value) + str;
      } else {
          return result + String(value) + str;
      }
  });
}