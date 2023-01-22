{
    // type Video = {
    //   title: string;
    //   author: string;
    // };
    // // [1, 2].map(item => item * item); // [1, 4]

    // type Optional<T> = {
    //   [P in keyof T]?: T[P]; // for...in
    // };

    // type ReadOnly<T> = {
    //   readonly [P in keyof T]: T[P];
    // };
    // type VideoOptional = Optional<Video>;

    // type Animal = {
    //   name: string;
    //   age: number;
    // };
    // const animal: Optional<Animal> = {
    //   name: 'dog',
    // };
    // animal.name = 'ellie';

    // const video: ReadOnly<Video> = {
    //   title: 'hi',
    //   author: 'ellie',
    // };

    type Video = {
        title: string;
        author: string;
    };

    type Video2 = {
        title: string;
        author: string;
    };

    type Optional<T> = {
        [P in keyof T]?: T[P];
    };

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    };

    const video: Optional<Video> = {
        title: '제목',
    };

    const video2: ReadOnly<Video> = {
        title: '제목',
        author: '작가',
    };

    // type VideoOptional = {
    //   title?: string;
    //   author?: string;
    // };

    // type VideoReadOnly = {
    //   readonly title: string;
    //   readonly author: string;
    // };

    type Mooseong = {
        name: string;
        age: number;
    };

    type MooseongNull<T> = {
        [P in keyof T]: T[P] | null;
    };

    const mooseong: MooseongNull<Mooseong> = {
        name: 'mooseong',
        age: null,
    };

    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: 'hi',
        author: null,
    };

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    };

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    };
}
