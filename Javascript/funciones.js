<script>
    // Productos en el catálogo
    const products = [
        
    {
        "id":1,
        "precio":200,
        "title": "Mesa comedor de Paraiso"
    },
    {
        "id":2,
        "precio":150,
        "title": "Mesa comedor de Guayubira"
    },
    {
        "id":3,
        "precio":100,
        "title": "Mesa comedor de Microcemento"
    },
    {
        "id":4,
        "precio":200,
        "title": "Estanteria Divisor"
    },
    {
        "id":5,
        "precio":150,
        "title": "Estanteria Moscu"
    },
    {
        "id":6,
        "precio":100,
        "title": "Estanteria Estambul"
    },
    {
        "id":7,
        "precio":180,
        "title": "Estanteria Berlin"
    },
    {
        "id":8,
        "precio":200,
        "title": "Rack de Tv London"
    },
    {
        "id":9,
        "precio":150,
        "title": "Rack de Tv Industrial"
    },
    {
        "id":10,
        "precio":100,
        "title": "Rack de Tv Tokio"
    },
    {
        "id":11,
        "precio":180,
        "title": "Rack de Tv Cancul"
    },
    {
        "id":12,
        "precio":200,
        "title": "Barra San Andres"
    },
    {
        "id":13,
        "precio":150,
        "title": "Barra Tulum"
    },
    {
        "id":14,
        "precio":100,
        "title": "Barra Tijuana"
    },
    {
        "id":15,
        "precio":180,
        "title": "Barra Berlin"
    },
    {
        "id":16,
        "precio":200,
        "title": "Mesa Ratona Con revistero"
    },
    {
        "id":17,
        "precio":150,
        "title": "Mesa Ratona Nido"
    },
    {
        "id":18,
        "precio":100,
        "title": "Mesa Ratona Tijuana"
    },
    {
        "id":19,
        "precio":180,
        "title": "Mesa Ratona Redonda"
    },
    {
        "id":20,
        "precio":200,
        "title": "Escritorio Cajones Superior"
    },
    {
        "id":21,
        "precio":150,
        "title": "Escritorio Tulum"
    },
    {
        "id":22,
        "precio":100,
        "title": "Escritroio Tulum"
    },
    {
        "id":23,
        "precio":200,
        "title": "Mesa Auxiliar Montenegro"
    },
    {
        "id":23,
        "precio":150,
        "title": "Mesa Auxiliar Tijuana"
    },
    {
        "id":24,
        "precio":100,
        "title": "Mesa Auxiliar Tijuana con Cajones"
    },
    {
        "id":25,
        "precio":180,
        "title": "Mesa Auxiliar Berlin"
    },
    {
        "id":26,
        "precio":200,
        "title": "Mesa de luz Peekin"
    },
    {
        "id":27,
        "precio":1500,
        "title": "Mesa de luz Texas"
    },
    {
        "id":28,
        "precio":100,
        "title": "Mesa de luz Nepal"
    }

    ];
  
    // Carrito de compra (inicialmente vacío)
    const cart = [];
  
    // Función para agregar un producto al carrito
    function addToCart(productId) {
      const product = products.find((p) => p.id === productId);
      if (product) {
        cart.push(product);
      }
      updateCart();
    }
  
    // Función para actualizar la visualización del carrito
    function updateCart() {
      const cartItems = document.getElementById("cart-items");
      const cartTotal = document.getElementById("cart-total");
  
      cartItems.innerHTML = "";
      let total = 0;
  
      cart.forEach((product) => {
        const item = document.createElement("li");
        item.textContent = `${product.title} - $${product.precio}`;
        cartItems.appendChild(item);
        total += product.precio;
      });
  
      cartTotal.textContent = total;
    }
  
    // Agregar listeners a los botones "Agregar al carrito"
    const addToCartButtons = document.querySelectorAll("button[data-id]");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const productId = parseInt(button.getAttribute("data-id"));
        addToCart(productId);
      });
    });
  </script>