package com.google.sps.servlets;
import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

@WebServlet("/teststationmap")

/**  receives the string entered on searchbar, converts it to Json and sends it to the server*/
public class TestStationMapServlet  extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
       
    
       response.sendRedirect("/teststationmap.html");
    }

}