package br.Insper.Backend.Historicos;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.ProceedingJoinPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
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

    @Pointcut("@annotation(org.springframework.web.bind.annotation.RequestMapping) || " +
            "@annotation(org.springframework.web.bind.annotation.GetMapping) || " +
            "@annotation(org.springframework.web.bind.annotation.PostMapping) || " +
            "@annotation(org.springframework.web.bind.annotation.PutMapping) || " +
            "@annotation(org.springframework.web.bind.annotation.DeleteMapping)")
    public void requestMappingMethods() {
        // Pointcut para métodos anotados com @RequestMapping e suas especializações
    }

    @After("requestMappingMethods()")
    public void registrarHistoricoAfter(JoinPoint joinPoint) {
        logger.debug("Iniciando método registrarHistoricoAfter para: {}", joinPoint.getSignature());

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

        logger.debug("Finalizando método registrarHistoricoAfter para: {}", joinPoint.getSignature());
    }

    // Alternativa usando @Around
    /*
    @Around("requestMappingMethods()")
    public Object registrarHistoricoAround(ProceedingJoinPoint joinPoint) throws Throwable {
        logger.debug("Iniciando método registrarHistoricoAround para: {}", joinPoint.getSignature());

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

        Object result = joinPoint.proceed(); // Continua a execução do método interceptado

        logger.debug("Finalizando método registrarHistoricoAround para: {}", joinPoint.getSignature());

        return result;
    }
    */
}