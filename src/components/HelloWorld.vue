<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div
      class="alert alert-warning"
      role="alert"
      v-show="produtos.length === 0"
    >
      Não existem registros de usuários !
    </div>

    <table class="table table-striped" v-show="produtos.length > 0">
      <thead>
        <tr>
          <th>id</th>
          <th>EAN</th>
          <th>Código Interno</th>
          <th>Descrição</th>
          <th>Detalhamento</th>
          <th>Fabricante</th>
          <th>Cor</th>
          <th>Tamanho</th>
          <th>Preço</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(produto, index) in produtos" :key="produto.id">
          <td>{{ produto.id }}</td>
          <td>{{ produto.ean }}</td>
          <td>{{ produto.codIn }}</td>
          <td>{{ produto.desc }}</td>
          <td>{{ produto.detalhe }}</td>
          <td>{{ produto.fabric }}</td>
          <td>{{ produto.cor }}</td>
          <td>{{ produto.tamanho }}</td>
          <td>{{ produto.preco }}</td>
          <td>
            <CompButton class="p-button-danger" @click="deletar(index)">
              Remover
            </CompButton>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="form-group">
      <span class="p-float-label">
        <p>
          <InputText
            placeholder="Digite um id"
            type="text"
            v-model="id"
            name="idProduto"
            class="p-inputtextarea"
          />
          <label for="username">Digite um id</label>
        </p>
      </span>

      <span class="p-float-label">
        <p>
          <InputText
            placeholder="Código EAN"
            type="text"
            v-model="ean"
            name="eanProduto"
            class="p-inputtextarea"
          />
          <label for="username">Código EAN</label>
        </p>
      </span>

      <span class="p-float-label">
        <p>
          <InputText
            placeholder="Código Interno"
            type="text"
            v-model="codIn"
            name="codInProduto"
            class="p-inputtextarea"
          />
          <label for="username">Código Interno</label>
        </p>
      </span>

      <span class="p-float-label">
        <p>
          <InputText
            placeholder="Descrição"
            type="text"
            v-model="desc"
            name="descInProduto"
            class="p-inputtextarea"
          />
          <label for="username">Descrição</label>
        </p>
      </span>

      <span class="p-float-label">
        <p>
          <InputText
            placeholder="Digite um Detalhamento"
            type="text"
            v-model="detalhe"
            name="detalheProduto"
            class="p-inputtextarea"
          />
          <label for="username">Detalhamento</label>
        </p>
      </span>

      <div class="fabricantes">
        <p>
          <label>Fabricante: </label>
          <select class="p-cascadeselect" v-model="fabric">
            <option
              v-for="fabricante in fabri"
              :key="fabricante.id"
              :value="fabricante.fab"
            >
              {{ fabricante.fab }}
            </option>
          </select>
        </p>
      </div>

      <div class="variacoes">
        <p>
          <label>Cores: </label>
          <select class="p-cascadeselect" v-model="cor">
            <option v-for="cor in co" :key="cor.id" :value="cor.tipo">
              {{ cor.tipo }}
            </option>
          </select>
        </p>

        <p>
          <label>Tamanhos: </label>
          <select class="p-cascadeselect" v-model="tamanho">
            <option
              v-for="tamanho in taman"
              :key="tamanho.id"
              :value="tamanho.tam"
            >
              {{ tamanho.tam }}
            </option>
          </select>
        </p>
      </div>

      <span class="p-float-label">
        <p>
          <InputText
            placeholder="Digite o valor"
            type="text"
            v-model="preco"
            name="precoProduto"
            class="p-inputtextarea"
          />
          <label for="username">Digite o valor</label>
        </p>
      </span>

      <CompButton class="p-button-raised p-button-rounded" @click="adicionar()"
        >Adicionar</CompButton
      >

      <hr />

      <section class="cadastro">
        <section class="parte1">
          <div class="form-group">
            <span class="p-float-label">
              <p>
                <InputText
                  placeholder="Digite um id"
                  type="text"
                  v-model="id"
                  name="idProduto"
                  class="p-inputtextarea"
                />
                <label for="username">- Digite o id</label>
              </p>
            </span>

            <span class="p-float-label">
              <p>
                <InputText
                  placeholder="Código EAN"
                  type="text"
                  v-model="ean"
                  name="eanProduto"
                  class="p-inputtextarea"
                />
                <label for="username">- Código EAN</label>
              </p>
            </span>

            <span class="p-float-label">
              <p>
                <InputText
                  placeholder="Código Interno"
                  type="text"
                  v-model="codIn"
                  name="codInProduto"
                  class="p-inputtextarea"
                />
                <label for="username">- Código Interno</label>
              </p>
            </span>

            <span class="p-float-label">
              <p>
                <InputText
                  placeholder="Descrição"
                  type="text"
                  v-model="desc"
                  name="descInProduto"
                  class="p-inputtextarea"
                />
                <label for="username">- Descrição</label>
              </p>
            </span>

            <span class="p-float-label">
              <p>
                <InputText
                  placeholder="Digite um Detalhamento"
                  type="text"
                  v-model="detalhe"
                  name="detalheProduto"
                  class="p-inputtextarea"
                />
                <label for="username">- Detalhamento</label>
              </p>
            </span>

            <div>
              <p>
                <label>Fabricante: </label>
                <select class="p-cascadeselect" v-model="fabric">
                  <option
                    v-for="fabricante in fabri"
                    :key="fabricante.id"
                    :value="fabricante.fab"
                  >
                    {{ fabricante.fab }}
                  </option>
                </select>
              </p>
            </div>
          </div>
        </section>

        <section class="parte2">
          <section class="varia">
            <p class="p1">
              <label>Cores: </label>
              <select class="p-cascadeselect" v-model="cor">
                <option v-for="cor in co" :key="cor.id" :value="cor.tipo">
                  {{ cor.tipo }}
                </option>
              </select>
            </p>

            <p class="p1">
              <label>Tamanhos: </label>
              <select class="p-cascadeselect" v-model="tamanho">
                <option
                  v-for="tamanho in taman"
                  :key="tamanho.id"
                  :value="tamanho.tam"
                >
                  {{ tamanho.tam }}
                </option>
              </select>
            </p>

            <span class="p-float-label">
              <p>
                <InputText
                  placeholder="Digite o valor"
                  type="text"
                  v-model="preco"
                  name="precoProduto"
                  class="p-inputtextarea"
                />
                <label for="username">Valor</label>
              </p>
            </span>
          </section>
        </section>
      </section>

      <CompButton
        class="p-button-raised p-button-rounded"
        @click="adicionarVariacao()"
        >Teste</CompButton
      >
      <!-- -->
      <section>
        <div
          class="variacoes"
          v-for="(variacao, index) in variacoes"
          :key="index"
        >
          <div class="variacoes-input-container">
            <label for="cores">Cores:</label>
            <select name="cores" id="cores" v-model="variacao.cor">
              <option v-for="cor in co" :key="cor.id" :value="cor.tipo">
                {{ cor.tipo }}
              </option>
            </select>
          </div>
        </div>
      </section>

      <div class="variacoes-input-container">
        <label for="tamanho">Tamanho:</label>
        <select name="descricao" id="tamanho" v-model="tamanho">
          <option
            v-for="tamanho in taman"
            :key="tamanho.id"
            :value="tamanho.tam"
          >
            {{ tamanho.tam }}
          </option>
        </select>
      </div>

      <div class="variacoes-input-container">
        <label for="nome">Preço:</label>
        <input
          type="text"
          id="preco"
          name="preco"
          v-model="preco"
          placeholder="Digite valor"
        />
      </div>
      <!-- -->
      <section class="geral">
        <section class="lista">
          <hr />
          <ul v-for="(produto, index) in produtos" :key="index">
            <li>
              <p>id: <br />{{ produto.id }}</p>
            </li>
            <li>
              <p>EAN: <br />{{ produto.ean }}</p>
            </li>
            <li>
              <p>Código Interno: <br />{{ produto.codIn }}</p>
            </li>
            <li>
              <p>Descrição: <br />{{ produto.desc }}</p>
            </li>

            <li>
              <p>Detalhes: <br />{{ produto.detalhe }}</p>
            </li>
            <li>
              <p>Fabricante: <br />{{ produto.fabric }}</p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { tamanhos } from "../data/tamanhos.js";
import { cores } from "../data/cores";
import { fabricantes } from "../data/fabricantes";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      // variacoes: [{ cor: "", tamanho: "", preco: "" }],
      variacoes: [{ cor: "", tamanho: "", preco: "" }],
      taman: [],
      co: [],
      fabri: [],
      produtos: [
        {
          id: 1,
          ean: 1111111,
          codIn: 111,
          desc: "Ténis",
          detalhe: "Cano alto",
          fabric: "Nike",
          cor: "Branco",
          tamanho: "38",
          preco: "200,00",
        },
        {
          id: 2,
          ean: 2222222,
          codIn: 222,
          desc: "Sapatilha",
          detalhe: "Casual",
          fabric: "Moleca",
          cor: "Laranja",
          tamanho: "37",
          preco: "250,00",
        },
        {
          id: 3,
          ean: 3333333,
          codIn: 333,
          desc: "Sapatênis",
          detalhe: "Esporte",
          fabric: "Asics",
          cor: "Cinza",
          tamanho: "40",
          preco: "300,00",
        },
        {
          id: 4,
          ean: 4444444,
          codIn: 444,
          desc: "Coturno",
          detalhe: "Couro",
          fabric: "Freeway",
          cor: "Preto",
          tamanho: "41",
          preco: "350,00",
        },
      ],
      id: "",
      detalhe: "",
      ean: "",
      codIn: "",
      desc: "",
      fabric: "",
      cor: "",
      tamanho: "",
      preco: "",
    };
  },
  methods: {
    adicionarVariacao() {
      const variacao = { cor: "", tamanho: "", preco: "" };
      this.variacoes.push(variacao);
    },
    // addVariation() {
    //   const vari = {
    //     cor: null,
    //     tamanho: null,
    //     preco: null,
    //   };

    //   this.produtos.variacoes.push(vari);
    //   console.log(this.variacoes);
    // },
    teste() {
      var parte2 = document.querySelector(".parte2");
      parte2.style.visibility = "visible";
    },

    deletar(parametro) {
      this.produtos.splice(parametro, 1);
    },

    adicionar() {
      this.produtos.push({
        id: this.id,
        detalhe: this.detalhe,
        ean: this.ean,
        codIn: this.codIn,
        desc: this.desc,
        fabric: this.fabric,
        cor: this.cor,
        tamanho: this.tamanho,
        preco: this.preco,
      });

      this.id = "";
      this.detalhe = "";
      this.ean = "";
      this.codIn = "";
      this.desc = "";
      this.fabric = "";
      this.cor = "";
      this.tamanho = "";
      this.preco = "";
    },
  },
  mounted() {
    this.taman = tamanhos;
    this.co = cores;
    this.fabri = fabricantes;
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#fabricantes {
  display: flex;
  margin-left: 10px;
}

.p1 {
  display: flex;
  margin-left: 10px;
}

.cadastro {
  display: flex;
  justify-content: space-evenly;
}
.parte1 {
  width: 500px;
}

.parte2 {
  display: flex;
  justify-content: center;
  width: 350px;
  border: solid 1px blue;
  border-radius: 10px;
  padding-top: 40px;
  /* visibility: hidden; */
}
</style>
