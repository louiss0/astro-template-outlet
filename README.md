# Astro Template Outlet

You can't store the result of astro html expressions in a variable at all but you can use templates. Templates are
a good alternative to using JSX as variables and storing them in functions. The thing is that You don't have a way
of using the html that is stored in templates at all in Astro. `<AstroTemplateOutlet />` solves that problem.

## Usage

```
npm i astro-template-outlet
```

So how does this work? Well,

Create a template

```html
<template> </template>
```

Write Html inside of the template

```html
<template>
  <div>Hello I'm HTML</div>
</template>
```

Give the template an id

```html
<template id="greeting">
  <div>Hello I'm HTML</div>
</template>
```

Import and use AstroTemplateOutlet from "astro-template-outlet" and pass in the id of the template as the `templateId=` prop

```jsx
<body>
  <AstroTemplateOutlet templateId="greeting" />
</body>
```

Your HTML should look like something like this

```html
<template id="greeting"> </template>

<body>
  <div>Hello I'm HTML</div>
</body>
```

> [!info]+ Tip
> When it comes to using templates remember to put them at the bottom of your pages. If You want to be on top either use the default slot of the layout component that you are using or put them near the body tag
