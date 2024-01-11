import { model, connect as _connect, disconnect as _disconnect } from "mongoose";

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Interface para um repositório de posts
class IPostRepository {
  getPostById(id) {}
  getAllPosts(page, pageSize) {}
  insertPost(data) {}
}

// Implementação do repositório de posts usando o Mongoose
export class PostRepository extends IPostRepository {
  constructor() {
    super();
    this.postModel = model("Post");
  }

  async getPostById(id) {
    try {
      await this.connect();
      const post = await this.postModel.findById(id).exec();
      this.disconnect();
      return post;
    } catch (error) {
      console.error("Erro ao buscar o post pelo ID:", error);
      return null;
    }
  }

  async getAllPosts(page, pageSize) {
    try {
      await this.connect();
      const posts = await this.postModel
        .find()
        .skip(page * pageSize)
        .limit(pageSize)
        .exec();
      this.disconnect();
      return posts;
    } catch (error) {
      console.error("Erro ao buscar todos os posts:", error);
      return [];
    }
  }

  async insertPost(data) {
    try {
      await this.connect();
      const post = new this.postModel(data);
      await post.save();
      this.disconnect();
      return post;
    } catch (error) {
      console.error("Erro ao inserir o novo post:", error);
      return null;
    }
  }

  async connect() {
    await _connect("mongodb://localhost:27017/seu-banco-de-dados", dbConfig);
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  }

  disconnect() {
    _disconnect();
    console.log("Conexão com o MongoDB encerrada.");
  }
}
