package br.Insper.Backend.Beneficios;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeneficioRepository extends MongoRepository<Beneficio, String> {
    // Mostra todos os benefícios de um setor
    List<Beneficio> findBySetor(String setor);

    // Encontra um benefício pelo nome
    Beneficio findByNome(String nome);
}
