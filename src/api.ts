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

  getContentItems: async (repo: RepoLookup, path: string) => {
    const uri = `/repos/${repo.owner}/${repo.name}/contents/${path}`
    const { data } = await githubApi.get<any>(uri)
    const links = data.map((item: any) => item.url)
    const results = [] as string[]
    for (const link of links) {
      const { data } = await githubApi.get<any>(link)
      results.push(`data:image/png;base64,${data.content}`)
    }

    return results
  },
}
