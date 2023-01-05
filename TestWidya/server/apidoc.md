## Endpoints

List of Available Endpoints:

- `POST/ register`
- `POST/ login`
- `GET/ products`
- `GET/ products/:id`
- `GET/ users/:id`
- `POST/ products`
- `delete/ products`
- `PUT/ products`

### POST /register

#### Description

- add a user

#### Request

- Body
  ```json
  {
    "username": String,
    "email": String,
    "password": String,
    "gender": String
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
    {
      "id": Integer,
      "email": String
    }
  ```

_400 - Bad Request_

- Body

  ```json
  {
    "code": 400,
    "message": String
   }

  ```

### POST /login

#### Description

- add a user

#### Request

- Body
  ```json
  {
    "username": String,
    "password": String
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "access_token": String,
    "email": String,
    "username": String,
    "password": String,
    "gender": String,
    "id": Integer
  }
  ```
  _400 - Bad Request_
- Body
  ```json
  {
    "code": 400,
    "message": String
  }
  ```

_401 - Unauthorized_

- Body
  ```json
  {
    "code": 401,
    "message": String
  }
  ```

### GET /products

### Description

- get all products available

- Headers

```json
{
  "headers": "application/x-www-form-urlencoded"
}
```

### Response

_200 - OK_

- Body
  ```json
      [{
        "id": Integer,
        "name": String,
        "imgUrl": String,
      },
      ...
      ]
  ```

### GET /products/:id

### Description

- get one product

  ### Request

- Headers

```json
{
  "headers": "application/x-www-form-urlencoded"
}
```

- Params

```json
    {
      "id": Integer,
    }
```

### Response

_200 - OK_

- Body
  ```json
      {
        "id": Integer,
        "name": String,
        "imgUrl": String,
      }
  ```
  _400 - NOT FOUND_
- Body
  ```json
  "message":"product with id <id> is not found"
  ```

### GET /users/:id

### Description

- get one user

  ### Request

- Headers

```json
{
  "headers": "application/x-www-form-urlencoded"
}
```

- Params

```json
    {
      "id": Integer,
    }
```

### Response

_200 - OK_

- Body
  ```json
      {
        "id": Integer,
        "name": String,
        "gender": String,
      }
  ```
  _400 - NOT FOUND_
- Body
  ```json
  {
    "message": "user with id <id> is not found"
  }
  ```

### POST /products

### Description

- add a product

  ### Request

- Headers

```json
{
  "headers": "application/x-www-form-urlencoded"
}
```

- Body

```json
    {
      "name": String,
      "imgUrl": String,
    }
```

### Response

_200 - Ok_

- Body
  ```json
  {
    "id": Integer,
    "name": String,
    "imgUrl": String,
  }
  ```

### DELETE /products/:id

### Description

- delete a product

  ### Request

- Headers

```json
{
  "headers": "application/x-www-form-urlencoded"
}
```

- Params

```json
    {
      "id": Integer,
    }
```

### Response

_200 - Ok_

- Body
  ```json
  {
    "message": "success delete product: <product name>"
  }
  ```
  _400 - NOT FOUND_
- Body
  ```json
  {
    "message": "product with id <id> is not found"
  }
  ```

### PUT /products/:id

### Description

- update a product

### Request

- Headers

```json
{
  "headers": "application/x-www-form-urlencoded"
}
```

- Params

```json
    {
      "id": Integer,
    }
```

- Body
  ```json
  {
    "id": Integer,
    "name": String,
    "imgUrl": String,
  }
  ```

### Response

_200 - Ok_

- Body
  ```json
  {
    "message": "data with id <id> is updated!"
  }
  ```
  _400 - NOT FOUND_
- Body
  ```json
  {
    "message": "product with id <id> is not found"
  }
  ```

### Global Error

#### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "code": 500,
    "message": "Internal Server Error"
  }
  ```
