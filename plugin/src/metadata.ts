import { PluginMetadata } from '@ds-wizard/plugin-sdk/types'

import pkg from '../package.json' with { type: 'json' }

export const pluginMetadata: PluginMetadata = {
    uuid: '<uuid>',
    name: 'DSW Plugin',
    description: 'This is a DSW Plugin created from the template.',
    version: pkg.version,
}
