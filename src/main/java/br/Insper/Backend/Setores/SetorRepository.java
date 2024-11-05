package br.Insper.Backend.Setores;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SetorRepository extends MongoRepository<Setor, String> {
    Setor findBySetor(String setor);
}
