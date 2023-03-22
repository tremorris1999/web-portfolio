import { RepoLookup } from '@/types'
import { github } from '@/api'

export const repos: { [key: string]: RepoLookup } = {
  'speed-commerce': {
    owner: 'tremorris1999',
    name: 'speed-commerce',
  },
  'shop-gen': { owner: 'tremorris1999', name: 'shop-gen' },
  'web-portfolio': {
    owner: 'tremorris1999',
    name: 'web-portfolio',
    imageGetter: async () =>
      await github.getContentItems(repos['web-portfolio'], 'showcase'),
  },
  ActionifySharp: { owner: 'tremorris1999', name: 'ActionifySharp' },
  DataAdapterSharp: { owner: 'tremorris1999', name: 'DataAdapterSharp' },
  PogSharp: { owner: 'tremorris1999', name: 'PogSharp' },
  MirrorModel: { owner: 'tremorris1999', name: 'MirrorModel' },
  Mirror: { owner: 'tremorris1999', name: 'Mirror' },
}
