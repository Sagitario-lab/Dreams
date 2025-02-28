export const ROUTES={
    menu:'/',
    parche:'/notas-del-parche',
    patchView:'/notas-del-parche/:id',
    allPatchs:'/parches',
    tienda:'/tienda',
    producto:'/tienda/:id',
    eventos:'/eventos',
    evento:'/eventos/:id',
    descarga:'/descarga',
    cuenta:'/cuenta',
    login:'/login',
    registro:'/registro',
    
    adminDashboard:'/adminDashboard',  

    createPatch:'/adminDashboard/parches/create', 
    deletePatchList:'/adminDashboard/parches/delete', 
    updatePatch:'/adminDashboard/parches/update',
    updateSelectedPatch:'/adminDashboard/parches/update/:id',

    createShopArticle:'/adminDashboard/tienda/create', 
    deleteShopArticle:'/adminDashboard/tienda/delete', 
    updateShopArticle:'/adminDashboard/tienda/update',
    updateSelectedShopArticle:'/adminDashboard/tienda/update/:id',

    createEvent:'/adminDashboard/eventos/create',
    deleteEvent:'/adminDashboard/eventos/delete',
    updateEvent:'/adminDashboard/eventos/update',
    updateSelectedEvent:'/adminDashboard/eventos/update/:id',

    typeUser:'/adminDashboard/users/create', 
    typeEvent:'/adminDashboard/events/create', 
    typeProduct:'/adminDashboard/products/create'
}