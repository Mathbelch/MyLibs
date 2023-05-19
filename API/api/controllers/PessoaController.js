// Controladores são objetos.

// Importando a pasta com os modelos:
const database = require('../models');

// Criando a classe PessoaControler, com os métodos de CRUD. Os métodos são declarados como static para que seja possível chama-los sem necessitar criar uma nova instância da classe. Vamos definir os métodos como funções assíncronas, para que as operações com await esperem a conexão com o banco de realizada antes de serem executadas:
class PessoaController {
   static async pegaTodasAsPessoas(req, res) {
      try {
         const todasAsPessoas = await database.Pessoas.findAll();
         return res.status(200).json(todasAsPessoas);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   } 
   
   static async pegaUmaPessoa(req, res) {
      const { id } = req.params;
      try {
         const umaPessoa = await database.Pessoas.findOne( {where: { id: Number(id) }});
         return res.status(200).json(umaPessoa);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async criaPessoa(req, res) {
      const novaPessoa = req.body;
      try {
         const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
         return res.status(200).json(novaPessoaCriada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async atualizaPessoa(req, res) {
      const { id } = req.params;
      const novasInfos = req.body;
      try {
         await database.Pessoas.update(novasInfos, { where: { id: Number(id) }});
         const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) }});
         return res.status(200).json(pessoaAtualizada);
      }
      catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async apagaPessoa(req, res) {
      const { id } = req.params;
      try {
         await database.Pessoas.destroy({ where: { id: Number(id) }});
         return res.status(200).json( { menssagem: `id ${id} deletado` })
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
}




module.exports = PessoaController;