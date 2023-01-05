{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    // enum이랑 union타입의 차이점 : enum 같은 경우는 타입을 보존시키는 게 어렵다.
    // 그러나 union은 타입을 지정해주면 그것만 들어갈 수 있다.
    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    day = 10;
    console.log(day);

    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Wednesday';
}
