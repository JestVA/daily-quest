function counter_constructor() {
    let counter = 0;

    function up() {
        counter += 1;
        return counter;
    }

    function down() {
        counter -= 1;
        return counter;
    }

    return Object.freeze({
        up,
        down
    });
}