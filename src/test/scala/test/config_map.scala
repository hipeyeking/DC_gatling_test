package test
//import com.DC_test.demo.scala.GetConfig
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


  //val test = "https://apex-dc-push-test.chinapex.com.cn"
  //val map = Map("test"->"   ".toByte)
}
