[ ] DATABASE
    - [] DATA MODEL
        shopping-cart = {
            id: PRIMARY SERIAL KEY,
            name: VARCHAR(80),
            quantity: INT,
            unit: VARCHAR(20)'String',
            purchased: BOOLEAN DEFAULT FALSE
        }

[] SERVER SIDE
    - [] list.router.js ROUTES
        - CRUD -- CREATE, READ, UPDATE, DELETE
        - [] GET - READ
            - Have GET come back alphabetically
        - [] POST -- CREATE
        - [] PUT - UPDATE 
        - [] DELETE


[] APP.jsx

    -[] FORM
    -[] SHOPPING LIST 
        - [] RESET/CLEAR buttons
            - [] reset - SHOULD CLEAR the purchases and make them buyable again

            - [] clear - clear all ITEMS from the list and delete from database
        - [] LIST ITEMS FROM FORM
            - [] NAME
            - [] QUANTITY - [ ] UNIT
        - [] BUY - PUT ROUTE -- HIDE BUTTONS after buy!
            - MOVE ITEM TO end of list
        - [] REMOVE -- DELETE ROUTE


    - COMPONENTS
