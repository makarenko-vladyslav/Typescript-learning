type Users = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

function createOrUpdateUser(initialValues: Partial<Users>) {
    // Оновлення користувача
}

createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
});
