export default function getRepos () {
  const URL = 'https://api.github.com/users/mrvega01/repos'

  return fetch(URL)
    .then(res => res.json())
    .then(res => {
      return res.map(repo => {
        return {
          name: repo.name,
          description: repo.description,
          language: repo.language,
          homepage: repo.homepage,
          repoUrl: repo.html_url
        }
      })
    })
}
