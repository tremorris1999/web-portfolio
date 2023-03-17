import axios from 'axios'
import { CommitLog, LanguageList, Repo, RepoLookup } from './types'

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${import.meta.env.VITE_PAT}`,
  },
})

export const github = {
  getRepo: async (repo: RepoLookup) => {
    const uri = `/repos/${repo.owner}/${repo.name}`
    const { data } = await githubApi.get<Repo>(uri)
    return data
  },

  getCommits: async (repo: RepoLookup) => {
    const uri = `/repos/${repo.owner}/${repo.name}/commits`
    const { data } = await githubApi.get<CommitLog[]>(uri)
    return data
  },

  getLanguages: async (repo: RepoLookup) => {
    const uri = `/repos/${repo.owner}/${repo.name}/languages`
    const { data } = await githubApi.get<LanguageList>(uri)
    return data
  },
}
