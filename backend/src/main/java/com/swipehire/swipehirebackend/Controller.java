package com.swipehire.swipehirebackend;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

  @GetMapping("/")
  public String user(HttpServletRequest request){
    return "d" + request.getSession().getId();
  }
}
