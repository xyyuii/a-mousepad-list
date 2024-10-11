const gridOptions = {

     rowData: [
      { name: "Skypad 4.0", price: "$119.00", texture: "Very Smooth", dynamicFriction: "0.143", staticFriction: "0.177"},
      { name: "Artisan Raiden (Mid)", price: "$79.98", texture: "Smooth", dynamicFriction: "0.170", staticFriction: "0.245"},
      { name: "Zowie GSR 2", price: "$39.99", texture: "Smooth", dynamicFriction: "0.234", staticFriction: "0.336"},
      { name: "Steelseries QCK Heavy", price: "$24.99", texture: "Smooth", dynamicFriction: "0.225", staticFriction: "0.351"},
      { name: "Artisan Zero Soft", price: "$93.99", texture: "Slightly Textured", dynamicFriction: "0.197", staticFriction: "0.314"},
      { name: "Kurosun Ninja", price: "Discontinued", texture: "Smooth", dynamicFriction: "0.175", staticFriction: "0.270"},
      { name: "LGG Saturn Pro (X-Soft)", price: "$49.99", texture: "Smooth", dynamicFriction: "0.215", staticFriction: "0.358"},
      { name: "Kurosun Samurai", price: "Discontinued", texture: "Smooth", dynamicFriction: "0.201", staticFriction: "0.335"},
    ],
      
      columnDefs: [
        { field: "name" },
        { field: "price" }, 
        { field: "texture" },
        { field: "dynamicFriction" },
        { field: "staticFriction" },
      ],
      defaultColDef: { 
        flex: 1,
        wrapHeaderText: true,
        autoHeaderHeight: true,
        resizable: false,
        suppressMovable: true,
    },
    autoSizeStrategy: {
      type: 'fitCellContents'
    },
    suppressColumnMoveAnimation: true,
};

const myGridElement = document.querySelector('#myGrid');
agGrid.createGrid(myGridElement, gridOptions);