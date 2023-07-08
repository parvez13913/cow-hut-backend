# Application Routes:
## User
* api/v1/auth/signup (POST)
* api/v1/users (GET)
* api/v1/users/64a7d2c0b193233f1c01ceec (Single GET)
* api/v1/users/64a7d2c0b193233f1c01ceec (PATCH)
* api/v1/users/64a7d2c0b193233f1c01ceec (DELETE)

## Cows
* api/v1/cows (POST)
* api/v1/cows (GET)
* api/v1/cows/64a89fc2c8050fa1da8bf044 (Single GET)
* api/v1/cows/64a89fc2c8050fa1da8bf044 (PATCH)
* api/v1/cows/64a89fc2c8050fa1da8bf044 (DELETE)

## Pagination and Filtering Routes of Cows
* api/v1/cows?pag=1&limit=10
* api/v1/cows?sortBy=price&sortOrder=asc
* api/v1/cows?minPrice=20000&maxPrice=70000
* api/v1/cows?location=Chattogram
* api/v1/cows?searchTerm=Cha

## Orders
* api/v1/orders
* api/v1/orders
