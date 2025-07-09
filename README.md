# vkbin

This is applicable to package managers that cannot create script for non-existent files.

Get all bin paths in the workspace and write them to an empty file to ensure that the executable files will appear in `node_modules/.bin`.

## Usage

```sh
pnpm dlx vkbin && pnpm install
```
