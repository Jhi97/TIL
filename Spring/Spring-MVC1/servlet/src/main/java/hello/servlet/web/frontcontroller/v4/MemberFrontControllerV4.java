package hello.servlet.web.frontcontroller.v4;


import java.util.Map;

public class MemberFrontControllerV4 implements ControllerV4 {
    @Override
    public String process(Map<String, String> paramMap, Map<String, Object> model) {
        return "new-form";
    }
}
