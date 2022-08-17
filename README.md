# Persianas Florenza 

## Getting started

1. Create and fill a `.env` file following `.env.example`
2. Install dependencies
3. `yarn dev` to run it locally


## Editing website content 

Visit [Florenza - Dato CMS Admin Panel](https://florenza-website.admin.datocms.com/)

### Adding new fields

1. Go to `Settings` > `Models` and edit `Homepage` structure adding fields
2. In the code, go to `src/queries/homepage.gql` and add the new field following same name pattern (fields in DatoCMS have the id in `snake_case` and in the graphQL query they are `camelCase`)
3. Stop and run local server again



