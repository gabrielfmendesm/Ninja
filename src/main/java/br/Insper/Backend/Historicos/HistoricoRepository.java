package br.Insper.Backend.Historicos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricoRepository extends MongoRepository<Historico, String> {
}
