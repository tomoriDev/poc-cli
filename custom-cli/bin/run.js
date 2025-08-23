#!/usr/bin/env node

import {execute} from '@oclif/core'
import path from 'node:path'

// En el ejecutable de Bun, `import.meta.url` apunta a una ruta virtual.
// Usamos `process.execPath` para obtener la ruta real del ejecutable en el disco
// y le decimos a oclif que ese es el directorio raíz.
const dir = path.dirname(process.execPath)

await execute({dir})
