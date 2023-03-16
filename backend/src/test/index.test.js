const { app } = require("../app");
const request = require("supertest");
const api = request(app);

describe("TESTEO RUTAS ", () => {
  describe("GET /rickandmorty/detail/1",() => {
    it("Retorna un estatus 200", async() => {
       const response = await api.get("/rickandmorty/detail/1");
       expect(response.statusCode).toBe(200)
      });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"',async()=>{
      const response = await api.get("/rickandmorty/detail/1");
      expect(response.body).toHaveProperty('id')
      expect(response.body).toHaveProperty('name')
      expect(response.body).toHaveProperty('species')
      expect(response.body).toHaveProperty('gender')
      expect(response.body).toHaveProperty('image')
    })

    it('Si hay un error responde con status: 500', async()=>{
      await api.get('/rickandmorty/detail/IDqueNoExiste').expect(500)
    })

  });

  describe("POST /rickmorty/fav",()=>{
    it('Responde un array con el favorito agregados',async()=>{
      const data1 = {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      };

      const response1 = await api.post("/rickandmorty/fav").send(data1);
      expect(Object.keys(response1.body[0])).toContain("id","name","species", "gender", "status","image")
    })

    it("Responde un array con todos los favoritos agregados",async()=>{
      const data2 = 
      { id: 2,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      }
      const response2 = await api.post("/rickandmorty/fav").send(data2);
      expect(response2.body).toHaveLength(2)
    })
  })
  
  describe("DELETE /rickmorty/fav",()=>{
    it("Responde un array sin el personaje que fue eliminado",async()=>{
    const response = await api.delete("/rickandmorty/fav/1");
    console.log(response.body);
    expect(response.body).toHaveLength(1)
    })
  })

});
