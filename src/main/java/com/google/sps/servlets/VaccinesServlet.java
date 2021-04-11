package com.google.sps.servlets;
import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

@WebServlet("/vaccines")
public class VaccinesServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
        String stateVal= (String)request.getSession().getAttribute("state");
        //convert the string state to json
        String stateJson = convertToJson(stateVal);
        response.setContentType("application/json;");
        response.getWriter().println(stateJson);
    }

    /**Convert string into Json string */
    private String convertToJson(String state){
        String json = "[";
        
        json += "{" + "\"state\": " + "\"" + state + "\"" + "}" + "] "; 
        
        return json;
  }
}