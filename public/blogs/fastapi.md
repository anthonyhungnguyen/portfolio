# Building a REST API with FastAPI

## Table of Contents

## Prerequisites

### API (Application Programming Interface)

An API is an interface that defines interactions between multiple software components. It acts as an intermediary, allowing different systems to communicate and exchange data.

**Analogy:** Think of a waiter in a restaurant.

*   **Waiter (API):** Takes orders (requests) from customers.
*   **Customers (Clients):** Make requests for food or information.
*   **Kitchen (Server):**  Prepares the food or provides the data.
*   **Menu (API Documentation):** Describes the available options (endpoints) and how to order (make requests).

The waiter takes your order to the kitchen, which then prepares your meal. The waiter then brings the meal back to you. The API facilitates this interaction without you having to know the kitchen's inner workings.

**Example:** When you use a weather app on your phone, the app uses a weather API to get the current weather data from a weather service's server.

### REST (Representational State Transfer)

REST is an architectural style for designing networked applications. It's not a protocol or a strict standard, but rather a set of constraints and principles. When applied to web APIs, it leads to a more scalable and maintainable system.

**Key Principles of REST:**

*   **Client-Server:** Separates the user interface concerns (client) from the data storage concerns (server), improving portability and scalability.
*   **Stateless:** Each request from a client to a server must contain all the information the server needs to understand and fulfill the request. The server does not store any context about the client session between requests. This improves reliability and scalability. Analogy: Each time you order from a fast-food counter, you must provide your complete order every time.
*   **Cacheable:** Responses from the server should be identified as cacheable or not. Caching can improve performance by reducing the number of requests to the server.
*   **Uniform Interface:** This simplifies the architecture and improves visibility of interactions. Key constraints for a uniform interface include:
    *   **Resource Identification in Requests:** Individual resources are identified in requests, for example, using URIs in web-based REST systems.
    *   **Resource Manipulation Through Representations:** When a client holds a representation of a resource, including any metadata attached, it has enough information to modify or delete the resource.
    *   **Self-Descriptive Messages:** Each message includes enough information to describe how to process the message.
    *   **Hypermedia as the Engine of Application State (HATEOAS):** Clients transition through application states by selecting from a set of links provided in the responses.
*   **Layered System:** The architecture allows for intermediaries (proxies, load balancers) between the client and the server. A client doesn't need to know if it's connected directly to the end server. This enhances scalability and security.
*   **Code on Demand (Optional):** Servers can temporarily extend or customize the functionality of a client by transferring executable code (e.g., JavaScript).

### URI (Uniform Resource Identifiers)

A URI is a string of characters that identifies a resource. It's a general concept that encompasses both URLs and URNs (Uniform Resource Names).

**Think of it this way:** A URI is like a person's name, while a URL is like their address. The name identifies them, and the address tells you where to find them.

**Example:** `/books/123`, `urn:isbn:0-486-27520-7`

### URL (Uniform Resource Locators)

A URL is a specific type of URI that identifies a resource by its location on a network. It tells you not only *what* the resource is but also *where* to find it and *how* to access it.

**Example:** `https://www.example.com/books/123?format=json`

*   `https://`: Protocol (Hypertext Transfer Protocol Secure)
*   `www.example.com`: Domain name (server location)
*   `/books/123`: Path to the resource
*   `?format=json`: Query parameter

### ASGI (Asynchronous Server Gateway Interface)

ASGI is a spiritual successor to WSGI (Web Server Gateway Interface), designed to handle asynchronous requests. This is crucial for modern web applications that need to handle many concurrent connections efficiently, especially for real-time features like websockets.

*   **Asynchronous:**  Allows your application to handle multiple requests concurrently without waiting for each one to complete before moving to the next. This is done using Python's `async` and `await` keywords.

*   **Why is it important?**  Traditional web servers and frameworks (using WSGI) handle requests synchronously (one at a time). This can lead to performance bottlenecks when dealing with many concurrent users or I/O-bound tasks (waiting for network or database operations). ASGI, on the other hand, enables asynchronous, non-blocking operations, making your application more efficient and scalable.

### Pydantic

Pydantic is a Python library for data validation and parsing. It uses Python type annotations to define how data should be structured and validated.

**Key Features:**

*   **Data Validation:** Ensures that data conforms to the expected types and constraints.
*   **Data Parsing:** Converts raw data (e.g., from JSON) into Python objects.
*   **Automatic Documentation:** Pydantic models can be used to automatically generate API documentation.
*   **Type Hints:** Uses Python type hints for defining data models, making your code more readable and maintainable.
*   **Custom Validation:** Allows you to define complex validation rules beyond basic type checking.

**Example:**

```python
from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str
    signup_ts: datetime = None
    friends: List[int] = []
```

### Starlette

Starlette is a lightweight ASGI framework/toolkit. It provides the low-level building blocks for creating asynchronous web services in Python. FastAPI is built directly on top of Starlette.

**Key Features:**

*   **High Performance:** Designed for building high-performance APIs and web services.
*   **Asynchronous:** Supports asynchronous requests and responses using Python's `async` and `await`.
*   **WebSockets:** Built-in support for WebSockets.
*   **GraphQL:** Supports building GraphQL APIs.
*   **Modular:** Provides a set of reusable components that can be used independently or combined to build more complex applications.

### Uvicorn

Uvicorn is a lightning-fast ASGI server implementation. It's often used as the production server for FastAPI applications.

**Key Features:**

*   **High Performance:** Built on `uvloop` (a fast, drop-in replacement for the asyncio event loop) and `httptools` (a fast HTTP parser).
*   **Asynchronous:** Designed for running asynchronous applications.
*   **HTTP/1.1 and HTTP/2:** Supports both HTTP protocols.
*   **WebSockets:** Provides WebSocket support.
*   **Easy to Use:** Simple command-line interface for running ASGI applications.

### Dependency Injection

Dependency Injection (DI) is a software design pattern where objects receive their dependencies from external sources rather than creating them internally. This promotes loose coupling, making code more modular, testable, and maintainable.

**How it works in FastAPI:**

*   **Dependencies:** Functions that are called before a request is processed. They can be used to:
    *   Perform common logic (e.g., database connections, authentication).
    *   Validate data.
    *   Inject dependencies into your path operation functions.
*   **`Depends()`:** A function in FastAPI that declares a dependency.

**Example:**

```python
from fastapi import Depends, FastAPI

app = FastAPI()

async def get_db():  # This is our dependency
    db = "Imagine this is a database connection"
    try:
        yield db
    finally:
        print("Closing database connection (imagine this is happening)")

@app.get("/items/")
async def read_items(db = Depends(get_db)): # db is injected by Depends()
    return {"db": db}
```

In this example, `get_db` is a dependency that simulates getting a database connection. The `read_items` path operation function depends on this database connection. FastAPI automatically handles calling `get_db` and injecting the result into `read_items`.

**Benefits of DI in FastAPI:**

*   **Code Reusability:** Dependencies can be reused across multiple path operations.
*   **Testability:** Easier to mock dependencies for testing.
*   **Organization:** Keeps your code clean and well-structured.
*   **Automatic Documentation:** FastAPI uses dependencies to generate API documentation.

## What is FastAPI?

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. It's designed to be easy to use, highly performant, and production-ready.

### Key Features

*   **High Performance:** FastAPI is one of the fastest Python frameworks available, comparable to **NodeJS** and **Go**. It achieves this by being built on top of Starlette (for web routing) and Pydantic (for data validation).
*   **Fast to Code:**  Significantly increases development speed thanks to features like automatic data validation and API documentation. You can get a simple API up and running with very few lines of code.
*   **Type Hints and Data Validation:**  Leverages Python type hints to provide robust data validation through Pydantic. This means fewer bugs and more maintainable code.
*   **Automatic Interactive API Documentation:** Automatically generates interactive API documentation (using Swagger UI and ReDoc) from your code, making it easy for developers to understand and use your API.
*   **Easy to Learn and Use:** The framework is designed to be intuitive, with a simple and consistent API. The excellent documentation further aids in learning.
*   **Asynchronous Support:** Built for asynchronous operations using Python's `async` and `await` keywords, making it ideal for handling I/O-bound tasks and concurrent requests.
*   **Dependency Injection:**  Features a powerful yet easy-to-use dependency injection system, making code more modular, reusable, and testable.

## Installation

You can install FastAPI and Uvicorn (the recommended ASGI server) using `pip`:

```bash
pip install fastapi uvicorn
```

## Creating a FastAPI App

1. **Create a new Python file** (e.g., `main.py`).
2. **Add the following code:**

    ```python
    from fastapi import FastAPI

    app = FastAPI()

    @app.get("/")
    async def read_root():
        return {"Hello": "World"}
    ```

3. **Run the app using Uvicorn:**

    ```bash
    uvicorn main:app --reload
    ```

    *   `uvicorn`: The command to start the Uvicorn server.
    *   `main`: The name of your Python file (without the `.py` extension).
    *   `app`: The name of the FastAPI instance you created in your code.
    *   `--reload`: Enables auto-reloading, so the server restarts whenever you make changes to your code (useful during development).

4. **Access the app and documentation:**

    *   **App:** Open your web browser and go to `http://127.0.0.1:8000`. You should see the response: `{"Hello": "World"}`.
    *   **Interactive API Documentation (Swagger UI):** Go to `http://127.0.0.1:8000/docs`. You'll see an interactive interface where you can test your API endpoints.
    *   **Alternative API Documentation (ReDoc):** Go to `http://127.0.0.1:8000/redoc`.

## Defining Path Parameters

Path parameters are part of the URL path that can change. You define them in FastAPI using curly braces `{}` and type hints.

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```

*   **`@app.get("/items/{item_id}")`:** Defines a GET request to a path that includes a path parameter `item_id`.
*   **`async def read_item(item_id: int):`:**
    *   `item_id: int`: Declares the path parameter `item_id` and specifies that it should be an integer. FastAPI will automatically validate this.

**Example:** If you access `http://127.0.0.1:8000/items/5`, the response will be `{"item_id": 5}`.

## Query Parameters

Query parameters are optional parameters added to the end of a URL after a question mark (`?`), used to filter or modify the request.

```python
from fastapi import FastAPI

app = FastAPI()

# Fake database
fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip : skip + limit]
```

*   **`@app.get("/items/")`:** Defines a GET request to `/items/`.
*   **`async def read_item(skip: int = 0, limit: int = 10):`:**
    *   `skip: int = 0`: Declares a query parameter `skip` with a default value of `0`.
    *   `limit: int = 10`: Declares a query parameter `limit` with a default value of `10`.

**Example:**

*   `http://127.0.0.1:8000/items/`: Returns the first 10 items (default `skip=0`, `limit=10`).
*   `http://127.0.0.1:8000/items/?skip=2&limit=1`: Returns one item starting from the third item.

You can combine path parameters and query parameters in a single route. If you declare parameters in your function that are not part of the path, FastAPI will automatically interpret them as query parameters.

## Request Body

A request body is data sent by the client to your API as part of the request (typically in POST, PUT, PATCH methods). You define the structure of the request body using Pydantic models.

```python
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
async def create_item(item: Item):
    item_dict = item.dict()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict
```

*   **`class Item(BaseModel):`:** Defines a Pydantic model named `Item` with attributes:
    *   `name: str`: Required string.
    *   `description: Optional[str] = None`: Optional string (can be `None`).
    *   `price: float`: Required float.
    *   `tax: Optional[float] = None`: Optional float.
*   **`@app.post("/items/")`:** Defines a POST request to `/items/`.
*   **`async def create_item(item: Item):`:**
    *   `item: Item`:  Declares that the request body should be parsed and validated as an `Item` object.

Now, a client can send a JSON payload like this:

```json
{
    "name": "Example Item",
    "price": 99.99,
    "tax": 9.99
}
```

FastAPI will automatically convert this JSON into an `Item` object, validate the data types, and make it available in your `create_item` function.

## Response Model

A response model defines the structure and data types of the response that your API sends back to the client. You use Pydantic models for this, too.

```python
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

class ItemResponse(BaseModel):
    name: str
    price: float

@app.post("/items/", response_model=ItemResponse)
async def create_item(item: Item):
    return item
```

*   **`class ItemResponse(BaseModel):`:** Defines the structure of the response.
*   **`@app.post("/items/", response_model=ItemResponse)`:** Specifies that the response from this endpoint should conform to the `ItemResponse` model.

**Benefits of Using a Response Model:**

*   **Data Filtering:** Ensures that only the specified fields are returned to the client, even if your internal data structures have more information.
*   **Data Validation:** Validates the data being sent out, preventing accidental exposure of sensitive information or incorrect data types.
*   **Documentation:** The response model is included in the automatically generated API documentation.

## Dependency Injection in FastAPI

Dependency injection is a powerful way to manage dependencies in your FastAPI application, making your code more reusable, testable, and maintainable.

```python
from typing import Optional

from fastapi import Depends, FastAPI, Header, HTTPException
from pydantic import BaseModel

app = FastAPI()

async def verify_token(x_token: str = Header(...)):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")

async def verify_key(x_key: str = Header(...)):
    if x_key != "fake-super-secret-key":
        raise HTTPException(status_code=400, detail="X-Key header invalid")
    return x_key

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/", response_model=Item)
async def create_item(item: Item, x_token: str = Depends(verify_token), x_key: str = Depends(verify_key)):
    return item
```

In this example:

*   **`verify_token` and `verify_key`:** These are dependency functions. They take the `X-Token` and `X-Key` headers as input and raise an exception if they are not valid.
*   **`Depends(verify_token)` and `Depends(verify_key)`:** The `Depends` function is used to declare that the `create_item` path operation depends on the `verify_token` and `verify_key` functions.
*   **`x_token: str = Depends(verify_token)` and `x_key: str = Depends(verify_key)`**: These lines tell FastAPI to:
    1. Execute `verify_token` (and `verify_key`) before executing `create_item`.
    2. Pass the value of the `X-Token` (and `X-Key`) header to `verify_token` (and `verify_key`).
    3. Inject the return value of `verify_token` (and `verify_key`) into the `x_token` (and `x_key`) parameter of `create_item`.

**Other uses of dependency injection:**

*   **Database connections:** Inject a database session into your path operations.
*   **Authentication:** Check user authentication and authorization before processing a request.
*   **Settings:** Inject application settings or configuration values.
*   **Caching:** Manage cache operations.
*   **External services:** Inject clients for interacting with external services.

## Conclusion

FastAPI is a powerful and efficient web framework for building APIs in Python. Its key features, including high performance, automatic documentation, data validation, and dependency injection, make it an excellent choice for both small and large projects. Its use of Python type hints and asynchronous programming ensures your code is modern, maintainable, and ready for the demands of modern web applications.

## References

*   [FastAPI Documentation](https://fastapi.tiangolo.com/): The official FastAPI documentation is extremely well-written and comprehensive.
*   [Pydantic Documentation](https://pydantic-docs.helpmanual.io/): Learn more about Pydantic's data validation capabilities.
*   [Starlette Documentation](https://www.starlette.io/): Dive deeper into the underlying Starlette framework.
*   [Uvicorn Documentation](https://www.uvicorn.org/): Understand how Uvicorn serves your FastAPI applications.
