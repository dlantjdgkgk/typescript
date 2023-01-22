type PageInfo = {
    title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
};

type Example = 'name' | 'number' | 'email';

const test: Record<Example, string | number> = {
    name: 'mooseong',
    number: 5,
    email: 'dd',
};

console.log(test);

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
