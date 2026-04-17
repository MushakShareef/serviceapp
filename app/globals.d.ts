// globals.d.ts
declare module '*.css' {
  const content: string;
  export default content;
}

// Optional: also add this for CSS modules if you use them later
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}