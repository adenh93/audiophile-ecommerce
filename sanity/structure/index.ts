import {StructureBuilder} from 'sanity/desk'
import products from './products'
import links from './links'
import settings from './settings'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([products(S), links(S), settings(S)])
