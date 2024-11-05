package br.Insper.Backend.Historicos;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import jakarta.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Aspect
@Component
public class HistoricoAspect {

    private static final Logger logger = LoggerFactory.getLogger(HistoricoAspect.class);
    private final HistoricoService historicoService;

    @Autowired
    public HistoricoAspect(HistoricoService historicoService) {
        this.historicoService = historicoService;
    }

    @Pointcut("within(@org.springframework.web.bind.annotation.RestController *)")
    public void restController() {
    }

    @After("restController()")
    public void registrarHistoricoAfter(JoinPoint joinPoint) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes != null) {
            HttpServletRequest request = attributes.getRequest();
            String tipoRequisicao = request.getMethod();
            String endpoint = request.getRequestURI();

            logger.info("Registrando histórico: {} {}", tipoRequisicao, endpoint);

            historicoService.registrarHistorico(tipoRequisicao, endpoint);
        } else {
            logger.warn("Não foi possível obter os atributos da requisição para registrar o histórico.");
        }
    }
}