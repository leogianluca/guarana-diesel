import mongoose from 'mongoose';

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
    this.postModel = mongoose.model("Post");
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
      console.log("Iniciando conexão");
      await this.connect();
      console.log("Fim da conexão");
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
    await mongoose.connect("mongodb+srv://leleco:D50rXwQ0dXdO89Ey@cluster0.0czqi.mongodb.net/?retryWrites=true&w=majority", dbConfig);
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  }
  
  disconnect() {
    mongoose.connection.close();
    console.log("Conexão com o MongoDB encerrada.");
  }
}