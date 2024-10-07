
// Grid Options: Contains all of the Data Grid configurations
const gridOptions = {

    rowData: [
        { brand: "Artisan", name: "Raiden (Xsoft)", price: "$99", texture: "Smooth", staticFriction: "0.24", dynamicFriction: "0.22"},
      ],
      // Column Definitions: Defines the columns to be displayed.
      columnDefs: [
        { field: "brand" },
        { field: "name" },
        { field: "price" },
        { field: "texture" },
        { field: "staticFriction" },
        { field: "dynamicFriction" }
      ],
      defaultColDef: { 
        flex: 1,
        autoHeaderHeight: true,
    }
};

// Your Javascript code to create the Data Grid
const myGridElement = document.querySelector('#myGrid');
agGrid.createGrid(myGridElement, gridOptions);