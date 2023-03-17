export const CommitAuthor = () => ({
  name: 'string',
  email: 'string',
  date: 'string',
})

export type CommitAuthor = ReturnType<typeof CommitAuthor>

export const Commit = () => ({
  message: '',
  author: CommitAuthor(),
})

export type Commit = ReturnType<typeof Commit>

export const CommitLog = () => ({
  sha: 'string',
  node_id: 'string',
  html_url: 'string',
  commit: Commit(),
  message: '',
  url: '',
})

export type CommitLog = ReturnType<typeof CommitLog>
