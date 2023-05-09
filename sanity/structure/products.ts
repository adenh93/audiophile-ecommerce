import {ListItemBuilder, StructureBuilder} from 'sanity/desk'
import {BasketIcon} from '@sanity/icons'

const productsListItem = (S: StructureBuilder): ListItemBuilder =>
  S.listItem()
    .title('Products')
    .icon(BasketIcon)
    .child(
      S.list()
        .title('Product Documents')
        .items([
          S.listItem()
            .title('Products')
            .child(S.documentList().filter(`_type == "product"`).id('products')),
          S.listItem()
            .title('Categories')
            .child(S.documentList().filter(`_type == "category"`).id('categories')),
        ])
    )

export default productsListItem
