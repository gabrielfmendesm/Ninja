package br.Insper.Backend.Historicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class HistoricoService {
    @Autowired
    private HistoricoRepository historicoRepository;

    public void registrarHistorico(String tipoRequisicao, String endpoint) {
        Historico historico = new Historico();
        historico.setTipoRequisicao(tipoRequisicao);
        historico.setEndpoint(endpoint);
        historico.setDataHora(LocalDateTime.now());

        historicoRepository.save(historico);
    }
}