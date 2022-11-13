export let name: string = 'Daniel';
export const age: number = 32;
export const isValid: boolean = true;

name = 'Jessica';

export const templateString = ` This is a string
multiline
that can have
" doubles
' simple
inyect values ${ name }
expressions ${ 1 + 1 }
numbers: ${ age }
booleans: ${ isValid }
`

console.log( templateString );