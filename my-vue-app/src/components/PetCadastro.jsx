import React, { useState } from "react";
import {
  FormS,
  StyledH1,
  StyledDiv,
  DivFicha,
  DivCadastro,
  DivPai,
} from "../style/StyledPet";
import { v4 as uuidv4 } from "uuid";

function PetCadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [raca, setRaca] = useState("");
  const [cor, setCor] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [nomeDono, setNomeDono] = useState("");
  const [telefone, setTelefone] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [observacao, setObservacao] = useState("");

  const [pets, setPets] = useState([]);

  const addPets = (newPet) => {
    setPets((listaPets) => {
      return [...listaPets, newPet];
    });
  };
  const nomeChangeHandler = (event) => {
    setNome(event.target.value);
  };

  const idadeChangeHandler = (event) => {
    setIdade(event.target.value);
  };

  const racaChangeHandler = (event) => {
    setRaca(event.target.value);
  };

  const corChangeHandler = (event) => {
    setCor(event.target.value);
  };

  const tamanhoChangeHandler = (event) => {
    setTamanho(event.target.value);
  };

  const nomeDonoChangeHandler = (event) => {
    setNomeDono(event.target.value);
  };

  const telefoneChangeHandler = (event) => {
    setTelefone(event.target.value);
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const observacaoChangeHandler = (event) => {
    setObservacao(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formInfo = {
      idade: idade,
      nome: nome,
      raca: raca,
      cor: cor,
      tamanho: tamanho,
      nomeDono: nomeDono,
      telefone: telefone,
      imagemPet: selectedImage,
      observacao: observacao,
    };
    addPets(formInfo);
    setIdade("");
    setNome("");
    setRaca("");
    setCor("");
    setTamanho("");
    setNomeDono("");
    setTelefone("");
    setSelectedImage();
    setObservacao("");
  };

  return (
    <DivPai>
      <StyledH1>Cadastro de Pets</StyledH1>
      <DivCadastro>
        <FormS onSubmit={submitHandler}>
          <h3>Cadastro</h3>
          <div>
            <label>Nome: </label>
            <input type="text" value={nome} onChange={nomeChangeHandler} />
          </div>
          <div>
            <label>Idade: </label>
            <input type="text" value={idade} onChange={idadeChangeHandler} />
          </div>
          <div>
            <label>Raça: </label>
            <input type="text" value={raca} onChange={racaChangeHandler} />
          </div>
          <div>
            <label>Cor: </label>
            <input type="text" value={cor} onChange={corChangeHandler} />
          </div>
          <div>
            <label>Tamanho: </label>
            <input
              type="text"
              value={tamanho}
              onChange={tamanhoChangeHandler}
            />
          </div>
          <div>
            <label>Nome do Dono: </label>
            <input
              type="text"
              value={nomeDono}
              onChange={nomeDonoChangeHandler}
            />
          </div>
          <div>
            <label>Telefone: </label>
            <input
              type="text"
              value={telefone}
              onChange={telefoneChangeHandler}
            />
          </div>
          <div>
            <label>Foto do pet: </label>
            <input type="file" onChange={imageChange} />
          </div>
          <div>
            <label>Observações: </label>
            <input
              type="text"
              value={observacao}
              onChange={observacaoChangeHandler}
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </FormS>
      </DivCadastro>
      <DivFicha id="petsList">
              {pets.length === 0 && <p>Nenhum cadastro de pet encontrado</p>}{" "}
        {pets &&
          pets.map((pet) => {
            return (
              <StyledDiv key={uuidv4()}>
                <h2>Ficha do {pet.nome}</h2>
                <p>Nome: {pet.nome}</p>
                <p>Idade: {pet.idade}</p>
                <p>Raça: {pet.raca}</p>
                <p>Cor: {pet.cor}</p>
                <p>Tamanho: {pet.tamanho}</p>
                <p>Nome do Dono: {pet.nomeDono}</p>
                <p>Telefone: {pet.telefone}</p>
                <p>Imagem do Pet:</p>
                <img
                  src={URL.createObjectURL(pet.imagemPet)}
                  alt="imagem do pet"
                />
                <p>Observações: {pet.observacao}</p>
              </StyledDiv>
            );
          })}
      </DivFicha>
    </DivPai>
  );
}

export default PetCadastro;
