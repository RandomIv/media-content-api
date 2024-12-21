# Тестування працездатності системи

Тестування сервісу у Postman.

---

## Сценарії для користувача (User)

### GET api/users

<img src="get-all-users.png">

### GET api/users/:id

<img src="./get-one-user.png">

### POST api/users

<img src="create-user.png">

### PATCH api/users/:id

<img src="./update-user.png">

### DELETE api/users/:id

<img src="./delete-user.png">

## Виключні сценарії для користувача (user Exceptions)

### EXCEPTION(user): Wrong id

<img src="./error-wrong-id-type.png">

### EXCEPTION(User): Field must be unique

<img src="./error-validation-field-must-be-unique.png">

### EXCEPTION(User): Field is required

<img src="./error-validation-field-absent.png">

### EXCEPTION(User): User Not Found

<img src="error-user-not-found.png">
