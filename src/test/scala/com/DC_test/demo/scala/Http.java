package com.DC_test.demo.scala;

import com.alibaba.fastjson.JSONObject;
import scala.None;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Map;

public class Http {
    /**
     * 向指定URL发送GET方法的请求
     *
     * @param url
     *            发送请求的URL
     * @param param
     *            请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
     * @return URL 所代表远程资源的响应结果
     */
    public static String sendGet(String url, String param,String token) {
        String result = "";
        BufferedReader in = null;
        try {
            String urlNameString = url + "?" + param;
            URL realUrl = new URL(urlNameString);
            // 打开和URL之间的连接
            URLConnection connection = realUrl.openConnection();
            // 设置通用的请求属性
            connection.setRequestProperty("Authorization","Bearer "+token);
            connection.setRequestProperty("accept", "*/*");
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("user-agent",
                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 建立实际的连接
            connection.connect();
            // 获取所有响应头字段
            Map<String, List<String>> map = connection.getHeaderFields();
            // 遍历所有的响应头字段
            for (String key : map.keySet()) {
                System.out.println(key + "--->" + map.get(key));
            }
            // 定义 BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(
                    connection.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
        } catch (Exception e) {
            System.out.println("发送GET请求出现异常！" + e);
            e.printStackTrace();
        }
        // 使用finally块来关闭输入流
        finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
        return result;
    }

    /**
     * 向指定 URL 发送POST方法的请求
     *
     * @param url
     *            发送请求的 URL
     * @param param
     *            请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
     * @return 所代表远程资源的响应结果
     */
    public static String sendPost(String url, String param,String token) {
        PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        try {
            URL realUrl = new URL(url);
            // 打开和URL之间的连接
            URLConnection conn = realUrl.openConnection();
            // 设置通用的请求属性
            conn.setRequestProperty("Authorization","Bearer "+token);
            conn.setRequestProperty("token",token);
            conn.setRequestProperty("accept", "*/*");
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("user-agent",
                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 发送POST请求必须设置如下两行
            conn.setDoOutput(true);
            conn.setDoInput(true);
            // 获取URLConnection对象对应的输出流
            out = new PrintWriter(conn.getOutputStream());
            // 发送请求参数
            out.print(param);
            // flush输出流的缓冲
            out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            in = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
        } catch (Exception e) {
            System.out.println("发送 POST 请求出现异常！"+e);
            e.printStackTrace();
        }
        //使用finally块来关闭输出流、输入流
        finally{
            try{
                if(out!=null){
                    out.close();
                }
                if(in!=null){
                    in.close();
                }
            }
            catch(IOException ex){
                ex.printStackTrace();
            }
        }
        return result;
    }
    public static String getToken(String sr) {
        JSONObject outJson = JSONObject.parseObject(sr);
        String access_token =outJson.getJSONObject("result").getString("access_token");
        System.out.println(access_token);
        return access_token;

    }
    public static String getClientToken(String sr) {
        JSONObject outJson = JSONObject.parseObject(sr);
        String client_access_token =outJson.getString("data");
        System.out.println(client_access_token);
        return client_access_token;

    }
    public static String getAppId(String sr) {
        JSONObject outJson = JSONObject.parseObject(sr);
        String app_id =outJson.getJSONObject("data").getJSONArray("results").getJSONObject(0).getJSONArray("productList").getJSONObject(0).getString("appId");
        System.out.println(app_id);
        return app_id;

    }
    public static void main(String[] args) {
        //发送 POST 请求
        String sr=Http.sendPost("https://apex-dc-test.chinapex.com.cn/nexus/api/dc/project/query", "{\"page\":1,\"size\":10}","eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxZmIzYTc4NWFlMGU4Mjc4YjE2YmY0MDUxYmJjMmUwNiIsImlzcyI6ImNoaW5hcGV4IiwiYXVkIjoid3d3LmNoaW5hcGV4LmNvbSIsInN1YiI6Im1lQG5leHVzIiwiaWF0IjoxNjE5MDA4NTExLCJleHAiOjE2MTkwOTQ5MTF9.IJAcVSn2lrkd7ugRs3bHS3K1LhcekKUjtc_4-HvXj5g");
        System.out.println(sr);
        JSONObject outJson = JSONObject.parseObject(sr);
        String app_id =outJson.getJSONObject("data").getJSONArray("results").getJSONObject(0).getJSONArray("productList").getJSONObject(0).getString("appId");
        System.out.println(app_id);
//        JSONObject outJson = JSONObject.parseObject(sr);
//        String access_token =outJson.getJSONObject("result").getString("access_token");
//        System.out.println(access_token);
    }
}
