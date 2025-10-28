# Monorepo

This monorepo contains a demo blog app and libraries built with Nx. The key focus is a design token system that separates `globals` and `semantic` for consistent styling across components and tenants.

## Structure

- `apps/blog-web`: Next.js application.
- `libs/ui-components`: UI components (atoms, molecules, organisms).
- `libs/tokens`: Design tokens (global and semantic) + tenants `tenant-a` and `tenant-b`.
- `libs/services`: Data types and utilities.
- `libs/providers`, `libs/hooks`: Supporting utilities.

## Design Tokens

- `globals`: Source of truth for actual values.
  - `color`, `radius`, `shadow`, `spacing`, `typography` (`fontFamily`, `size`, `weight`).
- `semantic`: Keys consumed by components, resolved to `globals`.
  - Example: `semantic.button` references `globals.color`, `globals.radius`, `globals.shadow`.
  - Other components: `card`, `heading`, `text`, `blogCard`, `blogList`.

Tenants are defined in:

- `libs/tokens/src/lib/themes/tenant-a.ts`
- `libs/tokens/src/lib/themes/tenant-b.ts`

Visual differences across tenants come from `globals` overrides (e.g., `radius: 0`, `shadow: none` in tenant B), while `semantic` uses the same keys so components don’t change.

## Atom Mapping Pattern

Mapping from `semantic` → `globals` is handled at the atom level so component usage stays concise.

- `Heading`

  - Props: `colorKey`, `sizeKey`, `weightKey` (optional; defaults to `semantic.heading.text`, `size.lg`, `weight.bold`).
  - Example:
    ```tsx
    <Heading
      colorKey={theme.semantic.blogCard.title.color}
      sizeKey={theme.semantic.blogCard.title.size}
      weightKey={theme.semantic.blogCard.title.weight}
    >
      Title
    </Heading>
    ```

- `Text`

  - Props: `colorKey`, `sizeKey`, `weightKey` (optional; defaults to `semantic.text.text`, `size.md`, `weight.regular`).
  - Example:
    ```tsx
    <Text
      colorKey={theme.semantic.blogCard.excerpt.color}
      sizeKey={theme.semantic.blogCard.excerpt.size}
      weightKey={theme.semantic.blogCard.excerpt.weight}
    >
      Excerpt
    </Text>
    ```

- `Grid`

  - Props: `gapKey`, `columns`.
  - Example:
    ```tsx
    <Grid gapKey={theme.semantic.blogList.gap} columns={3}>
      {/* ... */}
    </Grid>
    ```

- `Card`
  - Uses `semantic.card` for `bg`, `border`, `text`, `radius`, `padding`, `shadow`.

With this pattern, components pass keys from `theme.semantic.*`, while atoms resolve them to `theme.globals`.

## Quick Start

- Install dependencies: `npm install`
- Start dev server: `nx serve blog-web`

Preview is available at `http://localhost:4200/` (Nx + Next.js default).

## Tenant Selection

- Configure the default tenant in the theme provider (app-level) or via available config.
- `tenant-a`: standard radius and shadow.
- `tenant-b`: `radius: 0`, `shadow: none` (components keep the same semantic keys).

## Testing

- Unit tests: `nx test <project>`
- E2E (Playwright): `nx e2e blog-web-e2e`

## Contributing

- Follow the semantic additions in `libs/tokens/src/lib/types.ts` and populate values per tenant.
- Keep mapping in atoms so molecules/organisms only pass semantic keys.
- Use the updated `.gitignore` for build artifacts, logs, and env files.
