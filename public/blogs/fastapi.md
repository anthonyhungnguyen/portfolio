# Building a REST API with FastAPI

## Prerequisites

- **API (Application Programming Interface)**: A way for different parts of a software to communicate with each other. Example: A waiter in a restaurant (API) takes orders (requests) from customers (clients) and brings food (data) from the kitchen (server).
- **REST (Representational State Transfer)**: An architectural style, not a protocol or standard.
  - **Client-Server**: Separation of concerns between the client and the server.
  - **Stateless**: Each request from a client to a server must contain all the information needed to understand the request.
  - **Cacheable**: Clients can cache responses.
  - **Uniform Interface**: A uniform way to interact with the server.
  - **Layered System**: A client can't tell if it's connected directly to the server or to an intermediary.
  - **Code on Demand (optional)**: Servers can send executable code to clients.
- **URI (Uniform Resource Identifiers)**: Uniform Resource Identifiers (e.g., /books/123)
- **URL (Uniform Resource Locators)**: URLs are a type of URI. They specify where a resource is located (e.g., https://example.com/books/123)
- **ASGI (Asynchronous Server Gateway Interface)**: A standard interface between web servers and Python web applications or frameworks to promote asynchronous programming.
- **Pydantic**: Data validation and parsing library for Python.
- **Starlette**: ASGI framework/toolkit for building high-performance asyncio
- **Uvicorn**: Lightning-fast ASGI server.
- **Dependency Injection**: A technique in which an object receives other objects that it depends on (dependencies) rather than creating them itself.

## What is FastAPI?
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.

### Key Features

- High performance: based on Starlette for the web parts and Pydantic for the data parts.
- Fast to code.
- Type hints and data validation.
- Automatic interactive API documentation. (Swagger UI)
- Easy to learn and use.
- Asynchronous support.
- Dependency injection.

## Installation
You can install FastAPI using pip:

```bash
pip install fastapi uvicorn
```

## Creating a FastAPI App

Create a new Python file (e.g., `main.py`) and add the following code:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
```

To run the app, use the following command:

```bash
uvicorn main:app --reload
```

You can now access the app at `http://127.0.0.1:8000`. Documentation is available at `http://127.0.0.1:8000/docs`.

## Defining Path Parameters

You can define path parameters in FastAPI using curly braces `{}`. For example:

```python
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}
```

## Query Parameters

You can define query parameters in FastAPI using query strings. For example:

```python
@app.get("/items/")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

## Request Body

You can define a request body in FastAPI using Pydantic models. For example:

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

@app.post("/items/")
def create_item(item: Item):
    return item
```

## Response Model

You can define a response model in FastAPI using Pydantic models. For example:

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

class ItemResponse(BaseModel):
    name: str
    price: float

@app.post("/items/", response_model=ItemResponse)
def create_item(item: Item):
    return item
```

## Dependency Injection

You can use dependency injection in FastAPI to manage dependencies. For example:

```python
from fastapi import Depends

def get_db():
    db = DBSession()
    try:
        yield db
    finally:
        db.close()

@app.get("/items/")
def read_items(db: DBSession = Depends(get_db)):
    return db.query(Item).all()
```

## Conclusion
FastAPI is a modern, fast web framework for building APIs with Python. It is easy to learn and use, supports type hints and data validation, and provides automatic interactive API documentation. FastAPI is a great choice for building high-performance APIs with Python.

## References
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Pydantic Documentation](https://pydantic-docs.helpmanual.io/)
- [Starlette Documentation](https://www.starlette.io/)
- [Uvicorn Documentation](https://www.uvicorn.org/)
