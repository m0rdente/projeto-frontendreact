import React from "react";
import styled from "styled-components";
import Home from "./componentes/Home";
import Carrinho from "./componentes/Carrinho";

const CardProduto = styled.div`
  height: 65vh;
  width: 18vw;
  padding: 0px 0px 20px 0px;
  box-shadow: 1px 1px 5px lightgray;
  border-radius: 9px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 65vw;
  }

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
const ProdutoImg = styled.img`
  width: 100%;
  height: 75%;
`;
const MainPrincipal = styled.div`
  background-color: #eae7e7;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const FooterPrincipal = styled.div`
  background-color: black;
  color: white;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: #4daecd;
    height: 16vh;
  }
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Roupa Espacial",
        price: 189.0,
        imagemURL: <ProdutoImg src= "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbq4gQpn5ln9UNrzACo4KU5OPL5BN9x2c8GBZNDyeHVeo84Z-2tcK6ckayiZ5aegIbQvD5AbCYcDS1Ei_-nHqjgE_zr1seFZYC1s5nHfgs9t2xk-8xP9Ut" />,
        quantidade: 1,
      },
      {
        id: 2,
        name: "Telescópio",
        price: 499.0,
        imagemURL: <ProdutoImg src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTeisvdC_dY86CoNR_r6jOodOScrCY-q7fwxzjabDFY5SbAmYkJQiinNGTlVf2G5-v0JrWt3cRRV_JFVRGz5xh1LmLGzGWJC9yQqv1Ipduz4fqQqy_2pP1C&usqp=CAE" />,
        quantidade: 1,
      },
      {
        id: 3,
        name: "Moleto NASA",
        price: 89.0,
        imagemURL: <ProdutoImg src="https://cf.shopee.com.br/file/d8e4e23169bdd0edfb7f455154848865" />,
        quantidade: 1,
      },
      {
        id: 4,
        name: "Foguete NASA - Brinquedo",
        price: 300.0,
        imagemURL: <ProdutoImg src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdfEOQSEsbr2o6IXTmIP0AKmnn9NmpiD6QbN2yo6rT8GPMyXQxLO25UrZGXr2d3UhyPmZ1qYwsfh7-UnswGfTdsn5AsW9MSv1IrdsuIYU&usqp=CAE" />,
        quantidade: 1,
      },
      {
        id: 5,
        name: "Foguete LEGO",
        price: 169.0,
        imagemURL: <ProdutoImg src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSurFnUoGwRGztuYrNCbzkShpQAHqjAGJjamOvX7NAFZdqHXh84BI8ayzqGwrL_PSYqSwuwSNgpHe3PjE-xTRKX24yVpeHmVnp1nnAH9g0-IymIWq8PWjhP" />,
        quantidade: 1,
      },
      {
        id: 6,
        name: "Camiseta Foguete",
        price: 59.0,
        imagemURL: <ProdutoImg src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdVOUf5l5v0zVIs68kKrg16q4bxm3vuLtKtg2O3fiP_Ft3fMqQSrS7nI7YFZd4Cnd_fWRvnSfVVeNqVQJr5h3lyX4yWPQhyzPgggmQH_WOrO0CyryPj9hfmQ&usqp=CAE" />,
        quantidade: 1,
      },
    ],
    filtro: "",
    query: "",
    minPrice: "",
    maxPrice: "",
    order: 1,
    pagina: false,
    produtosNoCarrinho: [],
    adicionados: false,
    quantidadeProdutos: 0,
  };

  
  adicionaProduto = (produtoId) => {
    this.setState({
      adicionados: false,
      quantidadeProdutos: this.state.quantidadeProdutos + 1,
    });

    const prod = this.state.produtos.filter((p) => {
      return p.id === produtoId;
    });
    const novaProduto = prod[0];

    const novoProdutoIndex = this.state.produtosNoCarrinho.findIndex((p) => {
     return p.id === produtoId;
    }) 
    if (novoProdutoIndex === -1){
      const novoProdutoAdicionado = [
        ...this.state.produtosNoCarrinho,
        novaProduto,
      ];
      console.log(novoProdutoAdicionado)
      this.setState({ produtosNoCarrinho: novoProdutoAdicionado });
    } else { 
        const copiaCarrinho = [...this.state.produtosNoCarrinho]
        copiaCarrinho[novoProdutoIndex].quantidade++
        this.setState({ produtosNoCarrinho: copiaCarrinho });
    }

    
  };

  removerProduto = (id) => {
    const novosProdutosNoCarrinho = this.state.produtosNoCarrinho
      .map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({
      produtosNoCarrinho: novosProdutosNoCarrinho,
    });
  };

  renderizaCarrinho = () => {
    this.setState({ pagina: true });
  };

  renderizaPaginaFalse = () => {
    this.setState({ pagina: false });
  };

  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value,
    });
  };

  updateMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value,
    });
  };

  updateMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value,
    });
  };
  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value,
    });
  };

  render() {
    let componenteCarrinho;

    if (this.state.adicionados) {
      componenteCarrinho = this.adicionaProduto;
    }

    if (this.state.pagina) {
      return (
        <Carrinho
          produtos={this.state.produtosNoCarrinho}
          removerProduto={this.removerProduto}
          renderizaPaginaFalse={this.renderizaPaginaFalse}
        />
      );
    }

    const novoArrayDeProdutos = this.state.produtos
      .filter((prod) => {
        return prod.name.toLowerCase().includes(this.state.query.toLowerCase());
      })
      .filter((prod) => {
        return this.state.minPrice === "" || prod.price >= this.state.minPrice;
      })
      .filter((prod) => {
        return this.state.maxPrice === "" || prod.price <= this.state.maxPrice;
      })
      .sort((cres, dec) => {
        return this.state.order * (cres.price - dec.price);
      })
      .map((produto) => {
        return (
          <CardProduto>
            {produto.imagemURL}
            <p>{produto.name}</p>
            <p>R${produto.price},00</p>
            <button onClick={() => this.adicionaProduto(produto.id)}>
              Adicionar ao carrinho
            </button>
          </CardProduto>
        );
      });

    return (
      <div>
        <Home
          query={this.state.query}
          updateQuery={this.updateQuery}
          minPrice={this.state.minPrice}
          updateMinPrice={this.updateMinPrice}
          maxPrice={this.state.maxPrice}
          updateMaxPrice={this.updateMaxPrice}
          order={this.state.order}
          updateOrder={this.updateOrder}
          renderizaCarrinho={this.renderizaCarrinho}
          quantidadeProdutos={this.state.quantidadeProdutos}
        ></Home>
        <MainPrincipal>{novoArrayDeProdutos}</MainPrincipal>

        <FooterPrincipal>
          <h3>Criado por Priscila Mordente</h3>
        </FooterPrincipal>
      </div>
    );
  }
}
export default App;
