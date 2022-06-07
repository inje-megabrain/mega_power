package mega.megaspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class megacontroller {

    @GetMapping ("hello")
    public String hello(Model model){
        model.addAttribute("data","hello!!");
        return "hello";
    }
    @GetMapping("hello-MVC")
    public String helloMvc(@RequestParam(value = "name", required = false) String name,Model model) {
        model.addAttribute("name",name);
        return "hello-template";
    }

    @GetMapping("hello-spring")
    @ResponseBody
    public String helloSpring(@RequestParam("name") String name){
        return "hello " + name;
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name3") String name3){
        Hello hello = new Hello();
        hello.setName(name3);
        return hello;
    }
    static class Hello {
        private String name3;
        public String getName(){
            return name3;
        }
        public void setName(String name){
            this.name3 = name;
        }
    }
}
