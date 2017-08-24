declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.js' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.gif' {
  const content: any;
  export default content;
}

declare module '*.txt' {
  const content: any;
  export default content;
}

declare module '*.md' {
  const content: any;
  export default content;
}

declare module 'input-moment' {
  const content: any;
  export default content;
}

declare module 'react-draft-wysiwyg' {
  const content: any;
  export default content;
}

declare var global: any;
