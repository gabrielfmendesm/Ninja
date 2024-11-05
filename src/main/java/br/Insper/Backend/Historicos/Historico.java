package br.Insper.Backend.Historicos;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDateTime;

@Document(collection = "historicos")
@Getter
@Setter
public class Historico {

    @MongoId
    private String id;
    private String tipoRequisicao; // GET, POST, etc.
    private String endpoint;
    private LocalDateTime dataHora;
}