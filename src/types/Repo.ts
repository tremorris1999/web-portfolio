export const Repo = () => ({
  id: 0,
  name: '',
  description: '',
  html_url: '',
  full_name: '',
  private: '',
  homepage: '',
  topics: [] as string[],
})

export type Repo = ReturnType<typeof Repo>

export interface RepoLookup {
  owner: string
  name: string
  imageGetter?: () => Promise<string[]>
}
