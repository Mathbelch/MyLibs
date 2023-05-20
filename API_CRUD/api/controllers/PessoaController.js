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

   // Métodos para operações com tabela Matriculas:
   static async pegaUmaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params;
      try {
         const umaMatricula = await database.Matriculas.findOne( {where: { id: Number(matriculaId), estudante_id: Number(estudanteId) }});
         return res.status(200).json(umaMatricula);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async criaMatricula(req, res) {
      const { estudanteId } = req.params;
      const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)};
      try {
         const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
         return res.status(200).json(novaMatriculaCriada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async atualizaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params;
      const novasInfos = req.body;
      try {
         await database.Matriculas.update(novasInfos, { where: { estudante_id: Number(estudanteId), id: Number(matriculaId) }});
         const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matriculaId) }});
         return res.status(200).json(matriculaAtualizada);
      }
      catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async apagaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params;
      try {
         await database.Matriculas.destroy({ where: { id: Number(matriculaId) }});
         return res.status(200).json( { menssagem: `id ${matriculaId} deletado` })
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}




module.exports = PessoaController;