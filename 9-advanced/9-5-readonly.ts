{
    type ToDo = {
        title: string;
        description: string;
    };

    const todo: Partial<ToDo> = {
        title: '이무성',
    };

    function display(todo: Partial<ToDo>) {}
}
