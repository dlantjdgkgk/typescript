{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsToUpdate };
    }
    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    };
    const updated = updateTodo(todo, { priority: 'low' });
    console.log(updated);

    type Mooseong = {
        name: string;
        age: number;
        description: string;
        developer: 'frontend' | 'backend';
    };

    function profileUpdate(
        profile: Mooseong,
        minimumProfile: Partial<Mooseong>
    ): Mooseong {
        return { ...profile, ...minimumProfile };
    }

    const mooseong: Mooseong = {
        name: '무성',
        age: 25,
        description: '개발자',
        developer: 'frontend',
    };

    const name = profileUpdate(mooseong, { age: 26 });
    console.log(name);
}
