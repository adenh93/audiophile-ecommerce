import {ListItemBuilder, StructureBuilder} from 'sanity/desk'
import {DocumentIcon, DocumentsIcon} from '@sanity/icons'

const pagesListItem = (S: StructureBuilder): ListItemBuilder =>
  S.listItem()
    .title('Pages')
    .icon(DocumentsIcon)
    .child(
      S.list()
        .title('Pages')
        .items([
          S.listItem()
            .title('Home Page')
            .icon(DocumentIcon)
            .child(S.document().schemaType('homePage').title('Home Page').id('homePage')),
          S.listItem()
            .title('Product Page')
            .icon(DocumentIcon)
            .child(S.document().schemaType('productPage').title('Product Page').id('productPage')),
          S.listItem()
            .title('Category Page')
            .icon(DocumentIcon)
            .child(
              S.document().schemaType('categoryPage').title('Category Page').id('categoryPage')
            ),
        ])
    )

export default pagesListItem
