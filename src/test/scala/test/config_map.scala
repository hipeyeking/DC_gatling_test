package test
//import com.DC_test.demo.scala.GetConfig
import com.DC_test.demo.scala.Http.{getAppId, getClientToken, getToken, sendGet, sendPost}
import org.yaml.snakeyaml.Yaml

import java.util

object config_map {
  val url247 = "http://10.25.21.247:3029"

  //val GetConfig = new GetConfig

  val stream = getClass.getResourceAsStream("/data/config.yaml")
  val yaml = new Yaml()
  val obj = yaml.load(stream).asInstanceOf[util.HashMap[String, Object]]
  val host   = obj.get("host").asInstanceOf[String]
  val repeat      = obj.get("repeat").asInstanceOf[Int]
  val during      = obj.get("during").asInstanceOf[Int]
  val user      = obj.get("user").asInstanceOf[Int]
  val resp1:String = sendPost("https://apex-dc-api-test.chinapex.com.cn/signature/password_token", "{\"app_id\": \"18e94303355ed4e7fe20f928cb663f99c7de0905\", \"app_secret\": \"ec49291da062b806d721d18c1c735ea900d1f66b\"}","");
  val access_token:String = getToken(resp1)
  val resp2:String = sendPost("https://apex-dc-test.chinapex.com.cn/nexus/api/tenant/user/login", "{\"username\": \"ryan\", \"password\": \"123456\"}","");
  val client_access_token:String = getClientToken(resp2)
  val resp3:String = sendPost("https://apex-dc-test.chinapex.com.cn/nexus/api/dc/project/query", "{\"page\":1,\"size\":10}",client_access_token);
  val app_id:String = getAppId(resp3)
  //val test = "https://apex-dc-push-test.chinapex.com.cn"
  //val map = Map("test"->"   ".toByte)
}
