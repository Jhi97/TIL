package hello.servlet.web.frontcontroller;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter @Setter
public class ModelView {
    private String viewName;

    private Map<String, Object> model = new HashMap<>();

    public ModelView(String viewName) {
        this.viewName = viewName;
    }
//
//    public Map<String, Object> getModel() {
//        return model;
//    }
//
//    public void setModel(Map<String, Object> model) {
//        this.model = model;
//    }
}
