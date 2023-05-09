import {ListItemBuilder, StructureBuilder} from 'sanity/desk'
import {LinkIcon} from '@sanity/icons'

const linksListItem = (S: StructureBuilder): ListItemBuilder =>
  S.listItem()
    .title('Links')
    .icon(LinkIcon)
    .child(
      S.list()
        .title('Links')
        .items([
          S.listItem()
            .title('Navigation')
            .child(
              S.documentList().filter(`_type == "navigation"`).title('Navigation').id('navigation')
            ),
          S.listItem()
            .title('Social Links')
            .child(
              S.documentList()
                .filter(`_type == "socialLink"`)
                .title('Social Links')
                .id('socialLinks')
            ),
        ])
    )

export default linksListItem
