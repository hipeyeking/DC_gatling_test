//package com.DC_test.demo.scala
//import org.omg.CORBA.portable.InputStream
//import org.yaml.snakeyaml.Yaml
//import org.yaml.snakeyaml.constructor.Constructor
//
//import java.util
//import scala.beans.BeanProperty
//
//
//class GetConfig extends Serializable {
//  @BeanProperty var host: String = "Unknown name"
//  @BeanProperty var during: Int = -1
//  @BeanProperty var user: Int = -1
//
//  val stream = getClass.getResourceAsStream("/data/config.yaml")
//  val yaml = new Yaml(new Constructor(classOf[GetConfig]))
//  val config: GetConfig = yaml.load(stream).asInstanceOf[GetConfig]
//  println(s"${config.host}, ${config.during}, ${config.user}")
//
//}
