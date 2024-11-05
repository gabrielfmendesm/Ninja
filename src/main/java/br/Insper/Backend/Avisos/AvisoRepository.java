package br.Insper.Backend.Avisos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvisoRepository extends MongoRepository<Aviso, String> {
    Aviso findByNome(String nome);
}
