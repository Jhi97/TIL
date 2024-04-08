package hello.springmvc.basic;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogTestController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @RequestMapping("/log-test")
    public String logTest() {
        String name = "서예지";
        logger.trace("trace log={}", name);
        logger.debug("debug log={}", name);
        logger.info("info log={}", name);
        logger.warn("warn log={}", name);
        logger.error("error log={}", name);

        logger.debug("String concat log="+name);
        return "ok";
    }
}
