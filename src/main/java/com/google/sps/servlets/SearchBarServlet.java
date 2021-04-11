package com.google.sps.servlets;
import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

@WebServlet("/searchbar")
public class SearchBarServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

   
    String stateValue = Jsoup.clean(request.getParameter("location"),Whitelist.none()).toUpperCase();
    request.getSession().setAttribute("state", stateValue);
    
    response.sendRedirect("/vaccines.html");
  }

  
}