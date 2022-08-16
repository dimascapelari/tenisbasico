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

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Adicionar Produtos
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <section class="cadastro">
              <section class="parte1">
                <div class="form-group">
                  <span class="p-float-label">
                    <p>
                      <InputText
                        placeholder="Digite um id"
                        type="text"
                        v-model="produto.id"
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
                        v-model="produto.ean"
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
                        v-model="produto.codIn"
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
                        v-model="produto.desc"
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
                        v-model="produto.detalhe"
                        name="detalheProduto"
                        class="p-inputtextarea"
                      />
                      <label for="username">- Detalhamento</label>
                    </p>
                  </span>

                  <div>
                    <p>
                      <label>Fabricante: </label>
                      <select class="p-cascadeselect" v-model="produto.fabric">
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
            </section>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
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
          <th></th>
        </tr>
      </thead>

      <tbody>
        <template v-for="(produto, index) in produtos" :key="produto.id">
          <tr>
            <td>{{ produto.id }}</td>
            <td>{{ produto.ean }}</td>
            <td>{{ produto.codIn }}</td>
            <td>{{ produto.desc }}</td>
            <td>{{ produto.detalhe }}</td>
            <td>{{ produto.fabric }}</td>
            <td>
              <CompButton class="p-button-danger" @click="deletar(index)">
                Remover
              </CompButton>
            </td>
          </tr>
          <tr>
            <td colspan="7">
              <div class="table-box">
                <table>
                  <thead>
                    <tr>
                      <th>Cor</th>
                      <th>Tamanho</th>
                      <th>Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(variacao, index) in produto.variacoes"
                      :key="index"
                    >
                      <td>{{ variacao.cor }}</td>
                      <td>{{ variacao.tamanho }}</td>
                      <td>{{ variacao.preco }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

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
                v-model="produto.id"
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
                v-model="produto.ean"
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
                v-model="produto.codIn"
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
                v-model="produto.desc"
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
                v-model="produto.detalhe"
                name="detalheProduto"
                class="p-inputtextarea"
              />
              <label for="username">- Detalhamento</label>
            </p>
          </span>

          <div>
            <p>
              <label>Fabricante: </label>
              <select class="p-cascadeselect" v-model="produto.fabric">
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
    </section>

    <CompButton
      class="p-button-raised p-button-rounded"
      @click="adicionarVariacao()"
      >Variação</CompButton
    >
    <br />
    <br />
    <!-- -->
    <section>
      <div
        class="variacoes"
        v-for="(variacao, index) in produto.variacoes"
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
        <div class="variacoes-input-container">
          <label for="tamanho">Tamanho:</label>
          <select name="descricao" id="tamanho" v-model="variacao.tamanho">
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
            v-model="variacao.preco"
            placeholder="Digite valor"
          />
        </div>
      </div>
    </section>

    <!-- -->
    <hr />

    <hr />
  </div>
</template>

<script>
import { tamanhos } from "../data/tamanhos.js";
import { cores } from "../data/cores";
import { fabricantes } from "../data/fabricantes";

export default {
  components: {
    // CompVariacoes,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
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
          variacoes: [{ cor: "Branco", tamanho: "38", preco: "200,00" }],
        },
        {
          id: 2,
          ean: 2222222,
          codIn: 222,
          desc: "Sapatilha",
          detalhe: "Casual",
          fabric: "Moleca",
          variacoes: [{ cor: "Laranja", tamanho: "39", preco: "300,00" }],
        },
        {
          id: 3,
          ean: 3333333,
          codIn: 333,
          desc: "Sapatênis",
          detalhe: "Esporte",
          fabric: "Asics",
          variacoes: [{ cor: "Azul", tamanho: "40", preco: "400,00" }],
        },
        {
          id: 4,
          ean: 4444444,
          codIn: 444,
          desc: "Coturno",
          detalhe: "Couro",
          fabric: "Freeway",
          variacoes: [{ cor: "Cinza", tamanho: "41", preco: "500,00" }],
        },
      ],
      produto: {
        id: "",
        detalhe: "",
        ean: "",
        codIn: "",
        desc: "",
        fabric: "",
        variacoes: [],
      },
    };
  },
  methods: {
    adicionarVariacao() {
      const variacao = { cor: "", tamanho: "", preco: "" };
      this.produto.variacoes.push(variacao);
    },
    // teste() {
    //   var parte2 = document.querySelector(".parte2");
    //   parte2.style.visibility = "visible";
    // },

    deletar(parametro) {
      this.produtos.splice(parametro, 1);
    },

    adicionar() {
      console.log(this.produto);
      this.produtos.push(this.produto);

      this.produto = {
        id: "",
        detalhe: "",
        ean: "",
        codIn: "",
        desc: "",
        fabric: "",
        variacoes: [],
      };
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
.table-box {
  width: 400px;
  margin: 0px auto;
}

.table-box table {
  width: 100%;
}

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
