import {ListItemBuilder, StructureBuilder} from 'sanity/desk'
import {CogIcon} from '@sanity/icons'

const settingsListItem = (S: StructureBuilder): ListItemBuilder =>
  S.listItem()
    .title('Settings')
    .icon(CogIcon)
    .child(
      S.list()
        .title('Settings')
        .items([
          S.listItem()
            .title('Global Layout')
            .child(
              S.document().schemaType('globalLayout').title('Global Layout').id('globalLayout')
            ),
        ])
    )

export default settingsListItem
