let datos = [
  {
    Id: 1,
    Categoria: "Remeras",
    NombreDelItem: "Remera",
    Precio: 600,
    Imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6628cd7a-dd6a-43d3-a2b1-a9c921a93f98/d4q0qtb-45c9906e-6ad2-48e7-a071-c1c6b0904f5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2MjhjZDdhLWRkNmEtNDNkMy1hMmIxLWE5YzkyMWE5M2Y5OFwvZDRxMHF0Yi00NWM5OTA2ZS02YWQyLTQ4ZTctYTA3MS1jMWM2YjA5MDRmNWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cEOmX0ZF4vX61G3xg-FlXtgXJC-EtC-XfGaIXu8aWG0"
  },
  {
    Id: 2,
    Categoria: "Pantalones",
    NombreDelItem: "Pantalones jean",
    Precio: 1100,
    Imagen: "https://pngimg.com/d/jeans_PNG5745.png"
  },
  {
    Id: 3,
    Categoria: "Accesorios",
    NombreDelItem: "Gorro",
    Precio: 400,
    Imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43bf0e.png"
  },
  {
    Id: 4,
    Categoria: "Remeras",
    NombreDelItem: "Remera manga larga",
    Precio: 900,
    Imagen: "https://wesport.com.uy/cdn/shop/products/bv4755-010-phsfh001-1000_1_800x.png?v=1633019585"
  },
  {
    Id: 5,
    Categoria: "Accesorios",
    NombreDelItem: "Bolso",
    Precio: 800,
    Imagen: "https://bosico.vteximg.com.br/arquivos/ids/1844270-600-600/Bolso-BWWQNG-NEGRO_1.jpg?v=638102529515970000"
  }
]

export const devolverProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datos);
    }, 1000);
  })
}

export const devolverProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datos.find(prod => prod.Id == id));
    }, 1000);
  })
}

let productos = [];

function filtrarProductos(categoria){
  for (const dato of datos) {
    if (dato.Categoria == categoria){
      productos.push(dato);
    }
  }
  return productos;
}

export const devolverProductosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    productos=[];
    setTimeout(() => {resolve(filtrarProductos(categoria))}, 1000);
  })
}