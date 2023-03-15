export const externalLinks: { [key: string]: () => void } = {
  linkedin: () => {
    window.open('https://www.linkedin.com/in/trevor-a-morris/', '_blank')
  },
  github: () => {
    window.open('https://github.com/tremorris1999', '_blank')
  },
  email: () => {
    window.open('mailto:tremorrisdev@gmail.com', '_blank')
  },
  spokane: () => {
    window.open('https://en.wikipedia.org/wiki/Spokane,_Washington', '_blank')
  },
  ewu: () => {
    window.open(
      'https://en.wikipedia.org/wiki/Eastern_Washington_University',
      '_blank'
    )
  },
  bun: () => {
    window.open('https://bun.sh', '_blank')
  },
  qwik: () => {
    window.open('https://qwik.builder.io/', '_blank')
  },
}
